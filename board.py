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
def board():
    global conn
    conn = mysql.connect()
    cursor = conn.cursor()
    sql = "SELECT userID, context FROM example"
    cursor.execute(sql)
    rows = cursor.fetchall()

    for i in range(len(rows)):
        print(rows[i][0]+':'+rows[i][1])

    return render_template('list.html', rows = rows)


"""
@app.route('/search', methods=["GET", "POST"])
def search():
    global conn
    if request.method == "POST":
        userID = request.form['userID']
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "select userID, context from example where userID = %s or context = %s"
        cursor.execute(sql, (userID, userID))
        rows = cursor.fetchall()

        for i in range(len(rows)):
            print(rows[i][0]+':'+rows[i][1])

        return render_template('search.html', rows = rows)
    else:
        return render_template('search.html')"""

@app.route('/add', methods = ['GET', 'POST'])
def add():
    global conn
    if request.method == 'POST':
        try:
            userID = request.form['userID']
            context = request.form['context']
            conn = mysql.connect()
            cursor = conn.cursor()
            sql = "INSERT INTO example(userID, context) VALUES (%s, %s)"
            cursor.execute(sql,(userID, context))
            conn.commit()
        except:
            conn.rollback()
        finally :
            return redirect(url_for('board'))
    else:
        return render_template('add.html')


@app.route('/update/<uid>', methods=["GET", "POST"])
def update(uid):
    global conn
    if request.method == "POST":
        userID = request.form['userID']
        context = request.form["context"]
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "UPDATE example SET userID = %s, context = %s WHERE userID = %s"
        cursor.execute(sql,(userID, context, uid))
        conn.commit()

        return redirect(url_for("board"))

    else:
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "SELECT userID, context from example where userID = %s"
        cursor.execute(sql,(uid))
        row = cursor.fetchall()

        return render_template("update.html", row = row)


# 게시판 내용 삭제 (Delete)
@app.route('/delete/<uid>')
def delete(uid):
    global conn
    conn = mysql.connect()
    cursor = conn.cursor()
    sql = "delete from example where userID = %s"
    cursor.execute(sql,(uid))
    conn.commit()

    return redirect(url_for("board"))


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80', debug=True)
