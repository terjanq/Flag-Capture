import struct
from Crypto.PublicKey import RSA
import os

def egcd(a, b):
    x,y, u,v = 0,1, 1,0
    while a != 0:
        q, r = b//a, b%a
        m, n = x-u*q, y-v*q
        b,a, x,y, u,v = a,r, u,v, m,n
        gcd = b
    return gcd, x, y



q_head = int("d0b1593944e0be69d6024c064a8ffa86e40ebbfed59ac33b3817459ed828b4e25700b5c5a82793d8f317c9655cf7fe8e6d4663cfd2d05254fa9a7cd8c05ad7e263cf3936399ef0b28dea509520c0ef0e3dc9a4615ca08544798489e78526aceb668406", 16)

n = int("be5d958b09b2291cf0bd36511c9155e229f8ae8dccaee1552c9669b81b532a363b4f34769412867ccf92cb40addef5200a05dcdef09c8da30982fa5413d952f4e7db3da739519fab77d574de52366c9603ace887c0cbf32c5247cec14228e8a72aa5256799e54c40f3a22d4642cdaf5e0dd077331158e7d84dba8756d531a4bb4d2ba3e79c29972f27eb8d0bf9df81e2e9cda23b0ddead23c00aaebfa0f5383277a22177729a9cb5ee58c47019b6cb322d7fb9a41df3a2d562dfd202f9063b5e5e5042cfef6ddcfe41232867e1c122a8dcc18ce51efbb8cc5f9bc0f3296f1091ca3010ed851273d4ca40675753da896ae5fcfa01593a7c84d518c503c0aee581", 16)

p_tail = int("602dbf6536e649914bf6de449be89cd9acb0d27354488e973bbfb7b5c4fd4c007387de2df582e18837", 16)

e = int("010001", 16);

shift = 4 * 58

q_head <<= shift;

summary = int(0)
mask = int(1)
temp_p = p_tail


for i in range(shift):
	if((n & mask) != (summary & mask)):
		q_head += mask
		summary += temp_p
	temp_p <<= 1
	mask <<= 1


q = q_head

assert n % q == 0

p = (n // q)

phi = (p - 1) * (q - 1)

gcd, d, b = egcd(e, phi)


print("p : {}\nq: {}\ne: {}".format(p, q, e) )

key = RSA.construct((n, e, d, p, q))

print (key.exportKey("PEM").decode('ASCII'))

f = open ("private.pem", "w")

f.write(key.exportKey("PEM").decode('ASCII'))

os.chmod("private.pem", 0o600)