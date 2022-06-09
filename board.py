from flask import Flask, render_template ,session, redirect, request, url_for
from flaskext.mysql import MySQL
import logging
import datetime


logging.basicConfig(filename = "logs/access.log", level = logging.DEBUG)
app = Flask(__name__, static_url_path='/static')

def log(request, message):
    log_date = get_log_date()
    log_message = f"{log_date} {str(request)} {message}"
    logging.info(log_message)



mysql = MySQL()
board = []

app.config['MYSQL_DATABASE_USER'] = 'local'
app.config['MYSQL_DATABASE_PASSWORD'] = 'roqkf2xla'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3306
app.config['MYSQL_DATABASE_DB'] = 'termDB'
app.secret_key = "ABCDEFG"

mysql.init_app(app)



@app.route('/')
def board():
    conn = mysql.connect()
    cursor = conn.cursor()
    sql = "SELECT userID, context FROM post"
    cursor.execute("set names utf8")
    cursor.execute(sql)
    data = cursor.fetchall()

    for i in range(len(data)):
        print(data[i][0]+':'+data[i][1])

    conn.close()
    cursor.close()

    return render_template('list.html', data = data)



@app.route('/search', methods=["GET", "POST"])
def search():
    if request.method == "POST":
        userID = request.form['userID']
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "select userID, context from post where userID = '%s'"
        value = (userID)
        cursor.execute(sql, value)
        data = cursor.fetchall()

        for i in range(len(data)):
            print(data[i][0]+':'+data[i][1])

        return render_template('search.html', data = data)
    else:
        return render_template('search.html')

@app.route('/add', methods = ['GET', 'POST'])
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
        finally :
            conn.close()
            return redirect(url_for('board'))
    else:
        return render_template('add.html')


@app.route('/update/<int:uid>', methods=["GET", "POST"])
def update(uid):
    if request.method == "POST":
        userID = request.form['userID']
        context = request.form["context"]
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "UPDATE post SET userID = '%s', context = '%s' WHERE userID = '%s'"%(userID, context, uid)
        cursor.execute(sql)
        conn.commit()


        return redirect(url_for("board"))
    else:
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "SELECT userID, context from post where userID = '%s'"%(uid)
        cursor.execute(sql)
        data = cursor.fetchall()

        return render_template("update.html", data = data)


# 게시판 내용 삭제 (Delete)
@app.route('/delete/<int:uid>')
def delete(uid):
    conn = mysql.connect()
    cursor = conn.cursor()
    sql = "delete from post where userID = '%s'"%(uid)
    cursor.execute(sql)
    conn.commit()

    return redirect(url_for("board"))


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80', debug=True)
