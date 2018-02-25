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
 


# b64 codes to real images
# I = 0;
# for b64 in enumerate(setm):
#     img = open("images/image{0:0=3d}.jpg".format(I), "w")
#     I += 1
#     img.write(base64.b64decode(b64[1]))


