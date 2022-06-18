from flask import Flask, render_template, redirect, request, jsonify, url_for, g
from flask_cors import CORS, cross_origin
import requests
from flaskext.mysql import MySQL
from datetime import datetime

app = Flask(__name__, static_url_path='/static')

CORS(app, supports_credentials=True)

mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = 'local'
app.config['MYSQL_DATABASE_PASSWORD'] = 'roqkf2xla'
app.config['MYSQL_DATABASE_HOST'] = 'plan.is119.kr'
app.config['MYSQL_DATABASE_PORT'] = 3308
app.config['MYSQL_DATABASE_DB'] = 'termDB'

mysql.init_app(app)

@app.route('/')
def login():
    return  render_template('login.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route("/callback")
def CallBack():
    params = request.args.to_dict()
    code = params.get("code")

    client_id = "xneNfIal5CkgtXiMRHOo"
    client_secret = "8v1fnuPn29"

    token_request = requests.get(
        f"https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id={client_id}&client_secret={client_secret}&code={code}")
    token_json = token_request.json()
    access_token = token_json.get("access_token")
    profile_request = requests.get("https://openapi.naver.com/v1/nid/me",
                                   headers={"Authorization": f"Bearer {access_token}"}, )
    profile_data = profile_request.json()

    conn = mysql.connect()
    cursor = conn.cursor()
    uid = profile_data['response']['id']
    sql = "SELECT * FROM user WHERE uid = '%s'" % (uid)
    cursor.execute(sql)
    data = cursor.fetchall()
    userData = {}
    #유저가 없을때
    #유저 db에 생성 후 INSERT
    #유저 데이터 가져와서 출석체크 시키기
    if data == ():
        uid = profile_data['response']['id']
        current_exp = 0
        attendance = 1
        nickname = profile_data['response']['email'].split('@')[0]
        recent = str(datetime.today())[0:10]
        permission = 1

        cursor = conn.cursor()
        sql = "INSERT INTO user(uid, current_exp, attendance, nickname, recent, permission) VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, (uid, current_exp, attendance, nickname, recent, permission))
        conn.commit()

        userData["uid"] = uid
        userData["current_exp"] = current_exp
        userData["attendance"] = attendance
        userData["nickname"] = nickname
        userData["recent"] = recent
        userData["permission"] = permission

        profile_data['userData'] = userData
    else :
        dataName = ["uid", "current_exp", "attendance", "nickname", "recent", "permission"]
        for index in range(0,len(data[0])):
            if index == 4 :
                userData[dataName[index]] = str(data[0][index])
            else :
                userData[dataName[index]] = data[0][index]
        profile_data['userData'] = userData

    return redirect(url_for('index', profile_data = profile_data))

@app.route("/naver")
def NaverLogin():
    client_id = "xneNfIal5CkgtXiMRHOo"
    redirect_uri = "http://localhost:80/callback"
    url = f"https://nid.naver.com/oauth2.0/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"
    return redirect(url)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
