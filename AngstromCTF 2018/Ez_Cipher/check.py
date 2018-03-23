def xor(a, b):
	
	if (len(a) > len(b)):
		x, y = b[:], a[:]
	else:
		x, y = a[:], b[:]

	for i in range(len(x)):
		y[-i - 1] += '^' + x[-i -1]
	return y

def ror(a):
	return a[-3:] + a[:-3]


def F(L, R, key):
	_R = xor(ror( xor(R, key) ), mask)
	return (R, xor(L,_R))




key0= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
key1= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


mask = ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
L = []
R = []


for i in range(128):
	L, R = F(L, R, key0)
	# print("L: {}\nR: {}\n".format(L, R))
	L, R = F(L, R, key1)
	print("L: {}\nR: {}\n".format(L, R))



# [000][111][222][333][444][555][666][777] [xxx] [aaa][bbb][ccc][ddd][eee][fff][ggg][hhh]


# key0 = [000][111][222][333][444][555][666][777] [xxx]
# key1 = [aaa][bbb][ccc][ddd][eee][fff][ggg][hhh]


# L=0, R=0

# newR = [xxx] [000][111][222][333][444][555][666][777]

# L = 0, R = [xxx] [000][111][222][333][444][555][666][777]

# newR = [777^hhh] [xxx][000^aaa][111^bbb][222^ccc][333^ddd][444^eee][555^fff][666^ggg]

# L = [xxx] [000][111][222][333][444][555][666][777], R = [777^hhh] [xxx][000^aaa][111^bbb][222^ccc][333^ddd][444^eee][555^fff][666^ggg]

# newR = [777^hhh^000][xxx^111][000^aaa^222][111^bbb^333][222^ccc^444][333^ddd^555][444^eee^666][555^fff^777][666^ggg^888]
