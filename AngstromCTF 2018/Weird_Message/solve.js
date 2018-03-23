const puny = require('punycode');
const fs = require('fs');
const readline = require('readline-sync');

var msg = fs.readFileSync(__dirname + '/message.txt').toString();

var dict = {};

while(msg.split('-').length > 1){
	var msg = puny.toUnicode('xn--' + msg);
	var msg2 = "";
	for(letter of msg){
		if(letter.charCodeAt(0) > 127 && !dict[letter]) {
			var rep = readline.question(`wut [${letter}] ?`);
			dict[letter] = rep;
		}
		
		msg2 += dict[letter] || letter;
	}
	msg = msg2;
}

console.log(msg);