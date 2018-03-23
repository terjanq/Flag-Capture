from flask import Flask, request, render_template, abort
import os, requests

app = Flask(__name__)

class user:
    def __init__(self, username, password):
        self.username = username
        self.__password = password
        self.files = []
    def getPass(self):
        return self.__password

users = {}

users["admin"] = user("admin", os.environ["FLAG"])

@app.errorhandler(500)
def custom500(error):
    return str(error), 500

@app.route("/", methods=["GET", "POST"])
def mainpage():
    if request.method == "POST":
        if request.form["action"] == "Login":
            if request.form["username"] in users:
                if request.form["password"] == users[request.form["username"]].getPass():
                    return render_template("index.html", user=users[request.form["username"]])
                return "wrong password"
            return "user does not exist"
        elif request.form["action"] == "Signup":
            if request.form["username"] not in users:
                users[request.form["username"]] = user(request.form["username"], request.form["password"])
                return render_template("index.html", user=users[request.form["username"]])
            else:
                return "user already exists"
        elif request.form["action"] == "Add File":
            return addfile()
    return render_template("loggedout.html")

#beta feature for viewing info about other users - still testing
@app.route("/user/<username>", methods=['POST'])
def getInfo(username):
    val = getattr(users[username], request.form['field'], None)
    if val != None: return val
    else: return "error"

@app.route("/files/<path:file>", methods=["GET"])
def getFile(file):
    if "index.py" in file:
        return "no! bad user! bad!"
    return open(file, "rb").read()

def addfile():
    if users[request.form["username"]].getPass() == request.form["password"]:
        if request.form['url'][-1] == "/": downloadurl = request.form['url'][:-1]
        else: downloadurl = request.form['url']
        if downloadurl.split("/")[-1] in os.listdir("."):
            return "file already exists"
        file = requests.get(downloadurl, stream=True)
        f = open(downloadurl.split("/")[-1], "wb")
        first = True
        for chunk in file.iter_content(chunk_size=1024*512):
            if not first: break
            f.write(chunk)
            first = False
        f.close()
        users[request.form["username"]].files.append(downloadurl.split("/")[-1])
        return render_template("index.html", user=users[request.form["username"]])
    return "bad password"

if __name__ == "__main__": app.run(host="0.0.0.0")
