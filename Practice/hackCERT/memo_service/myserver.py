# 2018.02.28 22:14:52 CET
#Embedded file name: /opt/memo/server.py
from flask import Flask, session, render_template, request, redirect
from uuid import uuid4
from base64 import *
# from setup_server import cursor

app = Flask(__name__)
app.secret_key = 'lz2fhklkScDccJbseN3E'


@app.route('/', methods=['GET'])
def index():
    session['id'] = b"02e48ac6-fcaa-49d6-9963-7d75d1535359";
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=13337)



# decompiled 1 files: 1 okay, 0 failed, 0 verify failed
# 2018.02.28 22:14:53 CET
