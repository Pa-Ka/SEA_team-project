from flask import Flask, render_template, request, redirect, url_for
from flaskext.mysql import MySQL
from werkzeug.utils import secure_filename

import os

mysql = MySQL()
app = Flask(__name__, static_url_path='/static')

board = []

app.config['MYSQL_DATABASE_USER'] = 'local'
app.config['MYSQL_DATABASE_PASSWORD'] = 'roqkf2xla'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_PORT'] = 3306
app.config['MYSQL_DATABASE_DB'] = 'termDB'

mysql.init_app(app)


@app.route('/', methods=['GET', 'POST'])
def main():
    return render_template('fileupload.html')


@app.route('/fileUpload', methods=['GET', 'POST'])
def file_upload():
    if request.method == 'POST':
        f = request.files['file']
        f.save('/home/dev2team/Desktop/SEA_team-project/static/uploads/'+secure_filename(f.filename))

        conn = mysql.connect()
        cursor = conn.cursor()

        sql = "INSERT INTO images (image_name, image_dir) VALUES (%s, %s)"
        cursor.execute(sql,(secure_filename(f.filename),'/home/dev2team/Desktop/SEA_team-project/static/uploads/' + secure_filename(f.filename)))
        data = cursor.fetchall()

        if not data:
            conn.commit()
            return redirect(url_for("main"))

        else:
            conn.rollback()
            return 'upload failed'

        cursor.close()
        conn.close()


# @app.route('/view', methods=['GET', 'POST'])
# def view():
#     conn = mysql.connect()
#     cursor = conn.cursor()
#     sql = "SELECT image_name, image_dir FROM images"
#     cursor.execute(sql)
#     data = cursor.fetchall()
#
#     data_list = []
#
#     for obj in data:
#         data_dic = {
#             'name': obj[0],
#             'dir': obj[1]
#         }
#         data_list.append(data_dic)
#
#     cursor.close()
#     conn.close()
#
#     return render_template('view.html', data_list=data_list)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='80', debug=True)
