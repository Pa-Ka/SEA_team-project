from flask import Flask, render_template, redirect, request, url_for, jsonify
from flaskext.mysql import MySQL
import json
from datetime import datetime
app = Flask(__name__, static_url_path='/static')


mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'local'
app.config['MYSQL_DATABASE_PASSWORD'] = 'roqkf2xla'
app.config['MYSQL_DATABASE_HOST'] = 'plan.is119.kr'
app.config['MYSQL_DATABASE_PORT'] = 3308
app.config['MYSQL_DATABASE_DB'] = 'termDB'


mysql.init_app(app)

dt_now = datetime.now().date()
# print(dt_now)

@app.route('/' , methods=["GET", "POST"])
def index():
    if request.method == "POST":
        jsonData = request.get_json()

        print(
            jsonData['title']
            ,jsonData['color']
            ,jsonData['startTime']
            ,jsonData['endTime'])
        try:
            # calenderID = jsonData['calenderID']
            userID = "1FTLlxB_1PCOpadmWdIvQ54-qaJcT-Mb5dmHp1lI93U"
            missionID = 1
            status = 1
            title = jsonData['title']
            color = jsonData['color']
            startTime = jsonData['startTime']
            endTime = jsonData['endTime']
            conn = mysql.connect()
            cursor = conn.cursor()
            sql = "INSERT INTO calender(userID, missionID, title, color, `status`, startTime, endTime) VALUES (%s, %s, %s, %s ,%s, %s, %s)"
            cursor.execute(sql,(userID, missionID, title, color, status, startTime, endTime))
            conn.commit()

        except:
            conn.rollback()
    else:
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "SELECT title, color, left(startTime,16), left(endTime, 16) FROM calender"
        cursor.execute(sql)
        rows = cursor.fetchall()


        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "SELECT title, color, left(startTime,16), left(endTime, 16) FROM calender WHERE startTime LIKE CONCAT('%',date(now()),'%')"
        cursor.execute(sql)
        rowss = cursor.fetchall()
        return render_template('main_calendar.html', data=rows, cal=rowss)

    return 'ok'

# @app.route('/')
# def delete(uid):
#     conn = mysql.connect()
#     cursor = conn.cursor()
#     sql = "SELECT title, color, left(startTime,16), left(endTime, 16) FROM calender WHERE startTime LIKE CONCAT('%',date(now()),'%')"
#     cursor.execute(sql)
#     rows = cursor.fetchall()
#     return render_template('main_calendar.html', cal=rows)


 # WHERE startTime LIKE CONCAT('%',date(now()),'%')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80')
