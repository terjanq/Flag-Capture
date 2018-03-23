import struct

def lcg(m, a, c, x, i):
	if i == 0: return 2225636917
	if i == 1: return 1320590709
	if i == 2: return 4196912501
	return 2225636917

m = pow(2, 32)


a = 11111111111
c = 11111111111
x = 2445943554	

d = open('flag4.png').read()
d += '\x00' * (-len(d) % 4)
d = [d[i:i+4] for i in range(0, len(d), 4)]

e = ''
for i in range(len(d)):
	e += struct.pack('>I', x ^ struct.unpack('>I', d[i])[0])
	x = lcg(m, a, c, x, i)

with open('flag4.png.enc', 'w') as f:
	f.write(e)
	f.close()

