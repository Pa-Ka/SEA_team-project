from flask import Flask, render_template, session, redirect, request, url_for
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
app.secret_key = "ABCDEFG"

mysql.init_app(app)

@app.route('/', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        try:
            userID = request.form['userID']
            context = request.form['context']
            conn = mysql.connect()
            cursor = conn.cursor()
            sql = "INSERT INTO post (userID, context) VALUES ('%s', '%s')" % (userID, context)
            cursor.execute(sql)
            conn.commit()
        except:
            conn.rollback()
        finally:
            conn.close()
            return redirect(url_for('board'))
    else:
        return render_template('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80', debug=True)