from flask import Flask, render_template,redirect, request,url_for
from flaskext.mysql import MySQL

app = Flask(__name__, static_url_path='/static')


mysql=MySQL()

app.config['MYSQL_DATABASE_USER']='local'
app.config['MYSQL_DATABASE_PASSWORD']='roqkf2xla'
app.config['MYSQL_DATABASE_HOST']='plan.is119.kr'
app.config['MYSQL_DATABASE_PORT']=3308
app.config['MYSQL_DATABASE_DB']='termDB'

mysql.init_app(app)


@app.route('/')
def index():
    return  render_template('index.html')

@app.route('/ranking',methods=['GET'])
def ranking():
    if request.method == "GET":
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "SELECT nickname,current_exp FROM user ORDER BY current_exp DESC LIMIT 5"
        cursor.execute(sql)
        data = cursor.fetchall()
        return render_template('ranking.html',data = data)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80')
