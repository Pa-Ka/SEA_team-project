from flask import Flask, render_template, redirect, request, jsonify, url_for
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__, static_url_path='/static')

CORS(app, supports_credentials=True)


@app.route('/')
def login():
    return  render_template('login.html')

@app.route('/index')
def index():
    return  render_template('index.html')

@app.route("/callback")
def CallBack():
    params = request.args.to_dict()
    code = params.get("code")

    client_id = "xneNfIal5CkgtXiMRHOo"
    client_secret = "8v1fnuPn29"

    token_request = requests.get(
        f"https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id={client_id}&client_secret={client_secret}&code={code}")
    token_json = token_request.json()
    print(token_json)
    access_token = token_json.get("access_token")
    profile_request = requests.get("https://openapi.naver.com/v1/nid/me",
                                   headers={"Authorization": f"Bearer {access_token}"}, )
    profile_data = profile_request.json()
    print(profile_data)
    return redirect(url_for('index', profile_data = profile_data))


@app.route("/naver")
def NaverLogin():
    client_id = "xneNfIal5CkgtXiMRHOo"
    redirect_uri = "http://localhost:80/callback"
    url = f"https://nid.naver.com/oauth2.0/authorize?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code"
    return redirect(url)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
