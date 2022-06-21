from flask import Flask, render_template ,session, redirect, request, url_for
from flaskext.mysql import MySQL
import logging
import datetime

app = Flask(__name__, static_url_path='/static')


mysql = MySQL()
board = []

app.config['MYSQL_DATABASE_USER'] = 'local'
app.config['MYSQL_DATABASE_PASSWORD'] = 'roqkf2xla'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3306
app.config['MYSQL_DATABASE_DB'] = 'termDB'

mysql.init_app(app)

@app.route('/', methods=['GET', 'POST'])
def main():
    return render_template('checkbox.html')

@app.route('/checkbox', methods=['GET', 'POST'])
def check():
    global conn
    if request.method == "GET":
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "INSERT INTO example(userID, context) VALUES (%s, %s)"
        cursor.execute(sql,("asdf","asdf"))
        conn.commit()

        return 'upload'


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80', debug=True)
