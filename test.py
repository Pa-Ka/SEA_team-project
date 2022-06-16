from flask import Flask, render_template,redirect, request,url_for
from flaskext.mysql import MySQL

app = Flask(__name__, static_url_path='/static')


mysql=MySQL()

app.config['MYSQL_DATABASE_USER']='local'
app.config['MY_SQL_DATABASE_PASSWORD']='roqkf2xla'
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_PORT']=3306
app.config['MYSQL_DATABASE_DB']='termDB'

mysql.init_app(app)


@app.route('/')
def index():
    return  render_template('index.html')

@app.route('/ranking',methods=['GET'])
def ranking():
    if request.method == "GET":
        nickname=request.form['nickname']
        current_exp=request.form['current_exp']
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "SELECT nickname, current_exp FROM example"
        cursor.execute(sql)
        data = cursor.fetchall()
        for i in range(len(data)):
            print(data)
        return render_template('ranking.html',data=data)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80')
