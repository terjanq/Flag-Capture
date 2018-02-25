from pwn import *


def int2b(i):
	return str(bin(i))[2:]


def countSol(number):
	binary = int2b(number)[::-1]
	result = 0
	for i, x in enumerate(binary):
		if x == '0':
			result += 2**i

	return result

# Function to verify the corectness of the algorithm
def brute(number):
	result = 0
	for i in range(0, number):
		if(i ^ number > number):
			result += 1;
	return result;

# And here goes the confirmation :)
# for i in range (0, 10000):
# 	assert brute(i) == countSol(i)


p = remote('139.59.28.4', 1352)

print p.recvuntil('xor x > x\n')
print p.recvline(),
tests = int(p.recvline())
log.info('Tests: {}'.format(tests))
for i in xrange(tests):
    x = int(p.recvline())
    log.info('i: {} x = {}'.format(i, x))
    p.sendline(str(countSol(x)))
