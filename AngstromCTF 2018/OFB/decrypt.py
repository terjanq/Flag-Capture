import struct

def lcg(m, a, c, x):
	return (a*x + c) % m


def egcd(a, b):
    if a == 0:
        return (b, 0, 1)
    else:
        g, y, x = egcd(b % a, a)
        return (g, x - (b // a) * y, y)

def modinv(a, m):
    g, x, y = egcd(a, m)
    if g != 1:
        raise Exception('modular inverse does not exist')
    else:
        return x % m
def ss(a):
	return struct.unpack('>I', a)[0];


m = pow(2, 32)

d = open('flag.png.enc').read()
d = [d[i:i+4] for i in range(0, len(d), 4)]

# c = 2225636917 - a*2445943554

# with open('lcg') as f:
# 	a = int(f.readline())
# 	c = int(f.readline())
# 	x = int(f.readline())

# PNG 89 50 4D 47 0D 0A 1A 0A
# IHDR 00 00 00 0D 49 48 44 52


x = ss(d[0]) ^ ss("\x89\x50\x4e\x47")
x1 = ss(d[1]) ^ ss("\x0d\x0a\x1a\x0a")
x2 = ss(d[2]) ^ ss("\x00\x00\x00\x0d")
x3 = ss(d[3]) ^ ss("\x49\x48\x44\x52")

print "x0: " + str(x)
print "x1: " + str(x1)
print "x2: " + str(x2)
print "x3: " + str(x3)

# x0 = 2445943554, x1 = 2225636917, x2 = 1320590709, x3 = 4196912501


a = ((x1 - x2)*modinv(x - x1, m)) % m
c = (x1 - x*a) % m
print "a: " + str(a)
print "c: " + str(c)


e = ''

for i in range(len(d)):
	e += struct.pack('>I', x ^ struct.unpack('>I', d[i])[0])
	x = lcg(m, a, c, x)

with open('flag.png', 'w') as f:
	f.write(e)
	f.close()