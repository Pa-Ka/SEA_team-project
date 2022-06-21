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



@app.route('/')
def manage():
    global conn
    conn = mysql.connect()
    cursor = conn.cursor()
    sql = "SELECT nickname FROM user"
    cursor.execute(sql)
    rows = cursor.fetchall()

    for i in range(len(rows)):
        print(rows[i][0])

    return render_template('manage.html', rows = rows)




@app.route('/delete/<uid>')
def delete(uid):
    global conn
    conn = mysql.connect()
    cursor = conn.cursor()
    sql = "delete from user where nickname = %s"
    cursor.execute(sql,(uid))
    conn.commit()

    return redirect(url_for("manage"))


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80', debug=True)
