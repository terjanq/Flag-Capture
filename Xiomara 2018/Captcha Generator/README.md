# Captcha Generator &ndash; *Write-up by @terjanq*

## Description
The challenge was about `human face recognition`. The author's intention was to write a program able to determine if on the image we can either see a human or not-human. For the first case the answer should be `1` and for the second one `0`. The difficulty was that we had to process each given picture in relatively short amount of time, because the connection was dropping after some time. The input format was an image encoded in `base64`.  

On the IRC channel, I noticed that people were complaining about those timeouts because their programs were too slow.. In my solution I had no any issue with that :)

## Solution
If you are willing to see a cool tool for human face recognition I have to disappoint you. You won't find one here... **I didn't use any external tool!** I just used the fact that images database was relatively small and that `base64` string of the same image was always identical &ndash; no any `meta-data` added.  
So, I wrote the program which was remembering each proceeded image in [images.txt] file, and for each new instance of the program I was loading them as a `images dictionary`. Each image was labeled by `1` or `0` and the labeling was done by me, **by my own hands! :)** It didn't took much time to pass the test. Also some images were kind of beautiful so solving the challenge was very satisfying! I even decoded them to [images/] folder.  

I used two ways of displaying an image. The first one was about converting the image to colored ASCII and displaying it inside the terminal and the second one was just writing the data to actually existing image file [image.jpg], where if a picture changed my Image Viewer was automatically reloading the context. But the second option was done with quite a delay, so I prefer the console outputted photo :) To convert the image to ASCII code I used the `img2txt` tool. 

This is how my workstation looked like:

![workstation.png]

Pretty awesome, huh? 


## Code

Full code of [captcha.py] is as following:
```python
from pwn import *
import base64
import os

images = open("images.txt", "r")

setm = images.read().strip();
setm = setm.split('\n')
setm = list(map(lambda x: tuple(x.split(',')), setm))
setm = dict(setm)

p = remote('103.5.112.91', 1340)

print p.recvuntil("no human!\n")

images = open("images.txt", "a");


for i in xrange(100):
    b = p.recvuntil("\n\n")
    b = b.replace("\n", "")

    x = setm.get(b.strip())
 
    print x
    if x != '0' and x !='1':
        os.system("img2txt image.jpg -H 70 -W 200")
        x = raw_input('So what is it? ')
        f = open("image.jpg", "w")
        f.write(base64.b64decode(b))
        f.close()
        images.write('{},{}'.format(b.replace("\n", ""),x))
        p.send(x)
    else:
        p.sendline(x)
```


## Flag
With some help of my program I was able to easily pass the tests and the flag was: **xiomara{you_just_processed_an_image}**


[workstation.png]: <./workstation.png>
[images/]: <./images/>
[captcha.py]: <./captcha.py>
[image.jpg]: <./image.jpg>
[images.txt]: <./images.txt>