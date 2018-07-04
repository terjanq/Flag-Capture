# 2018.02.28 22:14:52 CET
#Embedded file name: /opt/memo/server.py
from flask import Flask, session, render_template, request, redirect
from uuid import uuid4
from setup_server import cursor
app = Flask(__name__)
app.secret_key = 'lz2fhklkScDccJbseN3E'

@app.route('/')
def index():
    session['id'] = session.get('id', str(uuid4()))
    cursor.execute("select count(*) from users where user_id='%s'" % session['id'])
    new_user = int(cursor.fetchone()[0]) == 0
    cursor.execute('select memo from memos where user_id=?', [session['id']])
    memos = [ x[0] for x in cursor.fetchall() ]
    return render_template('index.html', memos=memos, new_user=new_user)


@app.route('/save', methods=['POST'])
def save_memo():
    session['id'] = session.get('id', str(uuid4()))
    cursor.execute('insert into memos values (?, ?)', (request.form.get('memo'), session['id']))
    return redirect('/', code=302)


@app.route('/accept_cookies', methods=['POST'])
def accept_cookies():
    cursor.execute('insert into users values (?)', [session['id']])
    return redirect('/', code=302)
+++ okay decompyling server.pyc 
# decompiled 1 files: 1 okay, 0 failed, 0 verify failed
# 2018.02.28 22:14:53 CET
