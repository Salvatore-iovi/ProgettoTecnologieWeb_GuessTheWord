from pymongo import MongoClient
from flask import Flask, render_template
app = Flask(__name__)

app.config["SECRET_KEY"] = "SUPERSAFEKEY"

#Creazione istanza del client
client = MongoClient("mongodb://localhost:27017/")
#accediamo al database
db = client["GuessTheWord"]
#accediamo alla collezione utenti
users = db["users"]

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/About/', methods=['GET','POST'])
def About():
    return render_template("About.html")

@app.route('/Livello1/', methods=['GET','POST'])
def livello1():
    return render_template("Livello1.html")

@app.route('/Livello2/', methods=['GET','POST'])
def livello2():
    return render_template("Livello2.html")

@app.route('/Livello3/', methods=['GET','POST'])
def livello3():
    return render_template("Livello3.html")

@app.route('/Livello4/', methods=['GET','POST'])
def livello4():
    return render_template("Livello4.html")

@app.route('/Livello5/', methods=['GET','POST'])
def livello5():
    return render_template("Livello5.html")

@app.route('/Livello6/', methods=['GET','POST'])
def livello6():
    return render_template("Livello6.html")

@app.route('/Livello7/',methods=['GET','POST'])
def livello7():
    return render_template("Livello7.html")

@app.route('/Livello8/', methods=['GET','POST'])
def livello8():
    return render_template("Livello8.html")

@app.route('/Livello9/', methods=['GET','POST'])
def livello9():
    return render_template("Livello9.html")

@app.route('/Livello10/', methods=['GET','POST'])
def livello10():
    return render_template("Livello10.html")

if __name__ == "__main__":
    app.run(debug=True)

