# Recursive zip &ldash; *Write-up by @terjanq*

> Description
>---
> Do you know unzip?
> - [flag.zip]
>
> (Warmup, 40 points)  

____

So, we are given the [flag.zip] archive with recursive including another archive. The goal is to fetch the [flag.txt] file from isnide.  

I noticed repeating pattern that all off the included archives are named `flag.zip` and executed the simple `unzip` command inside endless loop.

```sh
$ while true; do unzip -o 'flag.zip'; done;
Archive:  flag.zip
  inflating: flag.txt                
Archive:  flag.zip
  inflating: flag.txt                
Archive:  flag.zip
  inflating: flag.txt                
Archive:  flag.zip
  inflating: flag.txt                
Archive:  flag.zip
  inflating: flag.txt                
Archive:  flag.zip
  inflating: flag.txt                
^C

```

Thanks to `-o` flag, the loop will recursively overwrite original `flag.zip` archive with the extracted one. The loop has no end so we have to terminate it by hand when the `flag.txt` is beeing extracted over and over.

Here is the flag: **HarekazeCTF{(\lambda f. (\lambda x. f (x x)) (\lambda x . f (x x))) zip}**





[flag.zip]: <./flag.zip>
[flag.txt]: <./flag.txt>
