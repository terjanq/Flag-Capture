function encode(msg, key) {
    var encoded_arr = [];
    msg = (new TextEncoder("utf-8")).encode( msg );

    for (var i = 0; i < msg.length; i++) {
        var c = msg[ i ];
        for (var j = 0; j in encoded_arr || c; j++) {
            if (encoded_arr[ j ]) { 
                c += encoded_arr[ j ] * 256 
            } 
            encoded_arr[ j ] = c % 58;
            c = Math.floor( c / 58 )
        }
    }

    return encoded_arr.reverse().map( x => key[x] ).join("")
}

function helper(i, c, encoded_arr, c0, cb){
    if(i == encoded_arr.length && c0 == 0) {
        this.solved = true;
        cb(String.fromCharCode( c ));
        return;
    }
    if(i == 0) this.solved = false;
    
    for(var r0 = 0; r0 < 58; r0++){
        var orig_r0 = encoded_arr[ i ];
        if( this.solved ) return;
        if( encoded_arr[ i ] == (c0 + r0*256) % 58 ){
            encoded_arr[ i ] = r0;
            helper(i + 1, c, encoded_arr, Math.floor( ( c0 + r0*256 ) / 58), cb );
            if( this.solved ) return;
            encoded_arr[ i ] = orig_r0;
        }
    }
}


Array.prototype.back = function(){
    return this[this.length - 1]; 
};

function decode(encoded_arr, key){
    encoded_arr = encoded_arr.split("");
    encoded_arr= encoded_arr.map( x => key.indexOf(x) ).reverse();

    var result = "";
    var callback = (x) => result += x;

    while(r.length){
        for(var c = 0; c < 256; c++)
            helper(0, c, r, c, callback);
        while( encoded_arr.length && !encoded_arr.back() ) encoded_arr.pop();
    }

    return result.split("").reverse().join("");
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

var console_code = document.querySelector('#console');
var _console = console.log
console.log = function(...args){
    if( console_code )
        console_code.innerHTML += args.join(" ") + "\n";
    _console(...args); 
}

var packets = ['iCmUsu3sWAgt1DLDTPiCsMkiJ','iTS5kqhhN6dZgQfzeXgG7yYr5','uKGMC4ZpKpR1Hbek9LnoWag','MENtnhfQx47g2MD4YfaPpapNRA','iBKoHeQsAyZ3yYg5uzbDpVBza','mez8Y8onREos36hbs1W3PrzEVyF','ioHr8fnSqtoRvLkvW6z6YoZLQ','iBKN3429YfCEmRAxT6f9g9Qsv','yvDepd8vhnp8MQNeYfiBKg2L5apQCZ','iDM2FWZnm2fnpYmYGmqVWex27','iDyQ3jA179gqDNzj51e8SzqfP','iDRMoK3vV8dwipy12npBHDCx6','RoAaJ29cybX87mddDKDJdDEw3ZGE29','iDVvjasQqyiaf7vKnNixERsNP','iBz2L9ZX6LUyopeooorQDnwYi','MEBmf8UBvosB98ocQawh9XZ45n','iM4zg74tACAR4XB7khRmL5gLC','iCATz5TGy5jcsCLGWawZSc8zc','iyvVZ3Q5xAVGy1ZLXZFdnXTep','iDS5YadHVaegKNDjYJkamNM8a','yvrGR54rYJj19e75eo1TACqEAuGfow','ioPy4npLFrivepDY4MioMARxZ','iBwMxi5246Xg7UQi2yvJQ8Xg6','iyvVWzDwMaVPLaZYQ2y975QT6','4VXm8RKGEgG95iKCXam1ygN','M77CEgVf6os6K6tjN1M6A9y7pn','MVeeCjRXYXcKdAgCxKFTJgAdZo','meFcfCq8k1CzkESo7i4GDRnhx9n','iyvkbgC3k9R7JTPUESdmeZfzn','oY9P5XbTFsaV4sS2CHBJE3hcYZTQvurTr','iEEhZ5DXWedXQ4iUQbmwrGrs3','dNUzs2v4Vf7U6GdArAhvCmdPtLH8WMviyq','iCAjd7zUWskbSy9RLYjtrZDCV','qPgGDYUvNuUT3Ch1fKgknFW4CPVcWgH','iShnuif7DhNDTetUZMXWG9rLJ','iDSiqPQnncdz6Rs6YGzmeWuqE','iC8FaVhXmb1GYXrCGw5CcuAXC','i7fBGggWJf9LNRdVprPLPpei3','i7fxmXUMpgst9kACHosb91Cka','MECvB5p81fNgVACMmJQsVd6cQB','iiDMtEVW7BUo5ocRRN4inXdQ7','iSEGbN9YJHTXWLQp2JRMcPmFp','iy9KSw2qYEeVA627cyZzH6F6U','iCN8mpZLH7uUp1fUADyGA5P95','MECbuHyU6L65iPw5Asw92EekYa','yvzJxXHW4XEPsncH4zSHDxVZf9tzxk','iBz2LgRNBBfq42MTaCV3wvjCR','iM5bfsw5xU93kTpig2Q4YmS7A','iBYgT3V51QMxRuxhUS1dSm6s2','ME8pn9tTKm3HEkhnFUeXyB7Wtd','iCN5jfUJiqBYWEbP3hhFgDfci','iDVWAJwuudMAi7x7CpNGARxA4','iMGUZeMFtyDcYf7qGpMHfsEvB','iCA3E5NsH2vMvZck9rexTLXG4','horZcydUns9SRFV8wefAJhEYWGwVfxrS','ME131HW8CbVfH26b1XpK6741Kk','iSEGaKaTXheBaHoAFgrF2ncaL','T6Kihw84sq6JnwNc1V6ps5','iDSNbdyahA2wUahbo5oaztjvm','iyvVWY7oECQ2PE3nLMW9ZcR1Q','iidqHMFJ5xshHM4XstWfXvHqJ','hiMU5F4R6qXdTWeiuwuL8so1qCDzsj4m','iC51H2btb9FywrKrgFCqcCUnA','iyvVZ8xTQrukCAiSe6Yrfogg4','i7qb1XR4yhPUzyK1y1k1M1kHH','iyducwzyZxJgeN11VjtYrPnrt','iBwageNmGH9F1Cx7gcK8nhPkC','yWzcku8Ed5ZYasGMqBNny8Cy8ue4hH'];

var key = "MeitamANbcfv2yXDH1RjPTzVqnLYFhE54uJUkdwCgGB36srQ8o9ZK7WxSp";
var msg = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36";

var key2 = key.split("");
shuffle( key2, rand( hash(msg) ) );
key2 = key2.join("")

window.onload = function(){
    var result = ""
    for( packet of packets ){
        var decoded = decode(packet, key2);
        if(/^\d+ .$/.test(decoded)) result += decoded[decoded.length - 1];
        console.log(decoded);
    }

    console.log("\n\nFlag: ", result, "\n\n");

    var kk = (encode(msg, key));

    console.log(`encoding: ${msg}\n\t${kk}\n`);
    console.log("decoded: ", decode(kk, key));
}