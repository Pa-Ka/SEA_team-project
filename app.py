from flask import Flask, render_template, redirect, request, url_for
# from flaskext.mysql import MySQL
from datetime import datetime
app = Flask(__name__, static_url_path='/static')

#
# mysql = MySQL()
#
# app.config['MYSQL_DATABASE_USER'] = 'local'
# app.config['MYSQL_DATABASE_PASSWORD'] = 'roqkf2xla'
# app.config['MYSQL_DATABASE_HOST'] = 'plan.is119.kr'
# app.config['MYSQL_DATABASE_PORT'] = 3308
# app.config['MYSQL_DATABASE_DB'] = 'termDB'


@app.route('/')
def index():
    return render_template('main_calendar.html')


# @app.route('/calender', methods=['POST'])
# def calender():
#     if request.method == 'POST':
#         conn = mysql.connection.cursor()
#         cursor = conn.cursor()
#
#         cursor.execute(sql)
#         return

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80')
