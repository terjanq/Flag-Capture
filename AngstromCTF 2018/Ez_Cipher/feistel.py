#!/usr/bin/python3
from pprint import pprint


def F(left, right, key):
    newR = (((right^key)>>3) + (((right^key)&7)<<(size//2-3))) ^ 0x3ffffff
    # print("{}\n{}\n".format(bin((right^key)>>3), bin(((right^key)&7)<<(size//2-3))))
    return (right, left^newR)

def encrypt(block, key):
    key0 = key>>size//2
    key1 = key & int('1'*(size//2),2)
    L = block>>size//2
    R = block & int('1'*(size//2),2)
    for i in range(128):
        L,R = F(L,R,key0)
        L,R = F(L,R,key1)


    return (L<<size//2)+R

#       ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
key = 0b1111000000000000000000000000000000000000000000000000
size = len(bin(key)[2:])
print(size)


L = 0b1111111111111111111111111111111111111111111111111111;
mask = 1


D = {}
for i in range(52):
    D[i] = []

I = 0

alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

for i in range(52):
    pt = 0
    ct = encrypt(pt,L^mask)
    # print(bin(L^mask))
    mask <<= 1
    bits = bin(ct)[3:].zfill(52) if ct < 0 else bin(ct)[2:].zfill(52)

    for j in range(len(bits)):
        if(bits[j] == '1'):
            D[j].append(alph[51-I])
    I+=1

keys = [
# ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
0b1111111111111111111111111111111111111111111111111111,
0b0000000000000000000000000000000000000000000000000000,
0b1111111111111111111111111111111111111111011111111111,
]

pprint (D)

for key in keys:
    pt = 0
    ct = encrypt(pt,key)
    bits = bin(ct)[3:].zfill(52) if ct < 0 else bin(ct)[2:].zfill(52)
    print(bits)





# ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
# 0111001100000110010001001101010101000011010010100001
# 0000000000000000000000000000000000000000000000000000