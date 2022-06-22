from crypt import methods
from plistlib import UID
import re
from unicodedata import name
from flask import Flask, render_template, redirect, request, jsonify, url_for, g
from flask_cors import CORS, cross_origin
from flask_login import UserMixin, LoginManager, current_user, login_required, login_user, logout_user
import requests
from flaskext.mysql import MySQL
from datetime import datetime
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, PasswordField
from wtforms.validators import DataRequired, Length, EqualTo

app = Flask(__name__, static_url_path='/static')

CORS(app, supports_credentials=True)

mysql = MySQL()
login_manager = LoginManager()


app.config['MYSQL_DATABASE_USER'] = 'local'
app.config['MYSQL_DATABASE_PASSWORD'] = 'roqkf2xla'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3306
app.config['MYSQL_DATABASE_DB'] = 'termDB'
app.secret_key = b'b811+02jaabm@'

# intiallize
mysql.init_app(app)
login_manager.init_app(app)

'''
CLASSES
'''
# UserMixin 상속하여 flask_login에서 제공하는 기본 함수들 사용
class User(UserMixin): 
    # User 객체에 저장할 사용자 정보
    # 그 외의 정보가 필요할 경우 추가한다. (ex. email 등)
    def __init__(self, user):
        self.uid = user['uid']
        self.nickname = user['nickname']
        self.current_exp = user['current_exp']
        self.attendance = user['attendance']
        self.recent = user['recent']
        self.permission = user['permission']
    
    def get_id(self):
        return str(self.uid)
    
    # User객체를 생성하지 않아도 사용할 수 있도록 staticmethod로 설정
    # 사용자가 작성한 계정 정보가 맞는지 확인하거나
    # flask_login의 user_loader에서 사용자 정보를 조회할 때 사용한다.
    @staticmethod
    def get_user_info(uid, user_pw=None):
        result = dict()
        try:
            data_name = ['uid', 'current_exp', 'attendance', 'nickname', 'recent', 'permission']
            cursor = conn.cursor();
            sql = f"SELECT uid, current_exp, attendance, nickname, recent, permission FROM user WHERE uid like '{uid}'"
            cursor.execute(sql)
            conn.commit()
            data = cursor.fetchall()
            for idx, item in enumerate(data_name):
                result[item] = data[0][idx]
            
        except ex:
            result['result'] = 'fail'
            result['data'] = ex
        finally:
            return result

class ArticleForm(FlaskForm):
    title = StringField('제목', validators=[DataRequired('제목은 필수입력 항목입니다.')])
    context = TextAreaField('내용', validators=[DataRequired('내용은 필수입력 항목입니다.')])

'''
Route
'''

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/')
@app.route('/index', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/mission', methods=['GET', 'POST'])
@login_required
def mission():
    if not current_user.is_authenticated:
        return redirect(url_for('login'))
    
    if request.method == 'GET':
        if current_user.permission == 0:
            cursor = conn.cursor()
            sql = f"SELECT m.title, m.`description`, imgurl, p.writeDate, m.exp, c.calenderID, u.uid FROM post p, `user` u, calender c, mission m WHERE uid=c.userID and c.calenderID=p.calenderID and m.missionID=c.missionID and `status`=1 and adminchk=0 and u.uid='{current_user.uid}' ORDER BY c.calenderID DESC LIMIT 10"
            cursor.execute(sql)
            mission_list = cursor.fetchall()
            cursor = conn.cursor()
            sql = f"SELECT m.title, m.`description`, imgurl, p.writeDate, m.exp, c.calenderID, u.uid FROM post p, `user` u, calender c, mission m WHERE uid=c.userID and c.calenderID=p.calenderID and m.missionID=c.missionID and `status`=1 and adminchk=1 and u.uid='{current_user.uid}' ORDER BY c.calenderID DESC LIMIT 10"
            cursor.execute(sql)
            complete_list = cursor.fetchall()
            return render_template('mission.html', mission_list=mission_list, complete_list=complete_list)
        else:
            cursor = conn.cursor()
            sql = f"SELECT m.title, m.`description`, imgurl, p.writeDate, m.exp, c.calenderID, u.uid, u.nickname FROM post p, `user` u, calender c, mission m WHERE uid=c.userID and c.calenderID=p.calenderID and m.missionID=c.missionID and `status`=1 and adminchk=0 ORDER BY c.calenderID DESC LIMIT 10"
            cursor.execute(sql)
            mission_list = cursor.fetchall()
            cursor = conn.cursor()
            sql = f"SELECT m.title, m.`description`, imgurl, p.writeDate, m.exp, c.calenderID, u.uid, u.nickname FROM post p, `user` u, calender c, mission m WHERE uid=c.userID and c.calenderID=p.calenderID and m.missionID=c.missionID and `status`=1 and adminchk=1 ORDER BY c.calenderID DESC LIMIT 10"
            cursor.execute(sql)
            complete_list = cursor.fetchall()
            return render_template('mission.html', mission_list=mission_list, complete_list=complete_list)
    else:
        return redirect(url_for('index'))
    
@app.route('/mission_check', methods=['POST'])
@login_required
def mission_check():
    if current_user.permission > 0:
        uid = request.form['uid']
        cal_id = request.form['calenderID']
        exp = request.form['point']
        cursor = conn.cursor()
        sql = f"UPDATE user SET current_exp = current_exp + {exp} WHERE `uid`='{uid}'"
        cursor.execute(sql)
        sql = f"UPDATE post SET adminchk = 1 WHERE `calenderID`={cal_id}"
        cursor.execute(sql)
        conn.commit()
        
        return redirect(url_for('mission'))
    
@app.route('/mission_reject', methods=['POST'])
@login_required
def mission_reject():
    if current_user.permission > 0:
        uid = request.form['uid']
        cal_id = request.form['calenderID']
        exp = request.form['point']
        cursor = conn.cursor()
        sql = f"UPDATE user SET current_exp = current_exp - {exp} WHERE `uid`='{uid}'"
        cursor.execute(sql)
        sql = f"UPDATE post SET adminchk = 0 WHERE `calenderID`={cal_id}"
        cursor.execute(sql)
        conn.commit()
        
        return redirect(url_for('mission'))

@app.route('/community')
@login_required
def community():
    if current_user.is_authenticated:
        cursor = conn.cursor()
        sql = "SELECT c.id, c.title, u.nickname, c.writedate, c.`view`  FROM community c, `user` u WHERE u.uid = c.writer ORDER BY c.id DESC"
        cursor.execute(sql)
        article_list = cursor.fetchall()
        return render_template('community.html', article_list=article_list)
    else:
        return redirect(url_for('login'))

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

    cursor = conn.cursor()
    uid = profile_data['response']['id']
    sql = "SELECT * FROM user WHERE uid = '%s'" % (uid)
    cursor.execute(sql)
    data = cursor.fetchall()
    userData = {}
    dataName = ["uid", "current_exp", "attendance", "nickname", "recent", "permission"]
    #유저가 없을때
    #유저 db에 생성 후 INSERT
    #유저 데이터 가져와서 출석체크 시키기
    if data == ():
        userData['uid'] = profile_data['response']['id']
        userData['current_exp'] = 0
        userData['attendance'] = 1
        userData['nickname'] = profile_data['response']['email'].split('@')[0]
        userData['recent'] = str(datetime.today())[0:10]
        userData['permission'] = 0
        cursor = conn.cursor()
        sql = "INSERT INTO user(uid, current_exp, attendance, nickname, recent, permission) VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, (userData['uid'], userData['current_exp'], userData['attendance'], userData['nickname'], userData['recent'], userData['permission']))
        conn.commit()
        profile_data['userData'] = userData
        login_info = User(profile_data['userData'])
        login_user(login_info)
    else :
        for index in range(0,len(data[0])):
            if index == 4 :
                userData[dataName[index]] = str(data[0][index])
            else :
                userData[dataName[index]] = data[0][index]
        profile_data['userData'] = userData
        login_info = User(userData)
        login_user(login_info)
    
    return redirect(url_for('index', profile_data=profile_data))

@app.route('/write', methods=['GET', 'POST'])
@login_required
def write():
    form = ArticleForm()
    if request.method == "POST" and form.validate_on_submit():
        title = form.title.data
        context = form.context.data
        
        cursor = conn.cursor()
        sql = "INSERT INTO community(writer, writedate, title, context, view) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(sql, (current_user.uid, datetime.now(), title, context, 0))
        conn.commit()
        
        return redirect(url_for('community'))
    return render_template("write.html", form=form)

@app.route("/naver")
def NaverLogin():
    client_id = "xneNfIal5CkgtXiMRHOo"
    redirect_uri = "http://plan.is119.kr:7777/callback"
    url = f"https://nid.naver.com/oauth2.0/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"
    return redirect(url)

@app.route("/logout")
def logout():
    logout_user()
    return render_template("login.html")

@app.route("/rank")
@login_required
def rank():
    if current_user.is_authenticated:
        conn = mysql.connect()
        cursor = conn.cursor()
        sql = "SELECT nickname,current_exp FROM user ORDER BY current_exp DESC LIMIT 10"
        cursor.execute(sql)
        data = cursor.fetchall()

        return render_template("rank.html",data=data)
    else:
        return render_template("index.html")

# flask_login에서 제공하는 login_required를 실행하기 전 사용자 정보를 조회한다.
@login_manager.user_loader
def user_loader(user_id):
    # 사용자 정보 조회
    user_info = User.get_user_info(user_id)
    # user_loader함수 반환값은 사용자 '객체'여야 한다.
    # 결과값이 dict이므로 객체를 새로 생성한다.
    login_info = User(user_info)

    return login_info

@login_manager.unauthorized_handler
def unauthorized():
    # 로그인되어 있지 않은 사용자일 경우 첫화면으로 이동
    return redirect("/login")

if __name__ == "__main__":
    conn = mysql.connect()
    app.run(host='0.0.0.0', port=80)
