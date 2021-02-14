from flask import Flask, request, redirect, session, url_for, Response, json, render_template, send_from_directory
from werkzeug.utils import secure_filename
from flask.json import jsonify
import json
import os
import random
import time
import requests
from flask_cors import CORS
import gcpocrlib
import quizgenerator
import cockroachdbhelper

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config.from_object(__name__)
CORS(app)




def downloadpic(pic_url, filename):
    

    with open(filename, 'wb') as handle:
            response = requests.get(pic_url, stream=True)

            if not response.ok:
                print (response)

            for block in response.iter_content(1024):
                if not block:
                    break

                handle.write(block)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



@app.route("/file_upload", methods=["POST"])
def fileupload():

    if 'file' not in request.files:
          return "No file part"
    file = request.files['file']
    # if user does not select file, browser also
    # submit an empty part without filename
    if file.filename == '':
      return "No selected file"
    if file and allowed_file(file.filename):
        UPLOAD_FOLDER = "./uploads"
  
        filename = secure_filename(file.filename)
        file.save(os.path.join(UPLOAD_FOLDER, filename))
        # uploadtogcp(os.path.join(UPLOAD_FOLDER, filename))
        return 'file uploaded successfully'
    
    return 'file not uploaded successfully'



@app.route("/generatequiz", methods=["POST"])
def quizer():

    if 'file' not in request.files:
          return "No file part"
    file = request.files['file']
    # if user does not select file, browser also
    # submit an empty part without filename
    if file.filename == '':
      return "No selected file"
    if file and allowed_file(file.filename):
        UPLOAD_FOLDER = "./uploads"
  
        filename = secure_filename(file.filename)
        file.save(os.path.join(filename))
        # uploadtogcp(os.path.join(UPLOAD_FOLDER, filename))

        words = gcpocrlib.detect_text(filename)

        qa = quizgenerator.getquiz(words)

        quiz =  qa['quiz']

        conn = cockroachdbhelper.connector()
        cockroachdbhelper.initialize(conn)


        for x in quiz:
            ques = x['question']
            ans = x['answer']
            cockroachdbhelper.addq(ques, ans, conn)
            
        qr = json.dumps(qa)

        resp = Response(qr, status=200, mimetype='application/json')

        return resp

        return 'file uploaded successfully'
    
    return 'file not uploaded successfully'





@app.route("/dummyJson", methods=['GET', 'POST'])
def dummyJson():

    print(request)

    res = request.get_json()
    print (res)

    resraw = request.get_data()
    print (resraw)

##    args = request.args
##    form = request.form
##    values = request.values

##    print (args)
##    print (form)
##    print (values)

##    sres = request.form.to_dict()
 

    status = {}
    status["server"] = "up"
    status["message"] = "some random message here"
    status["request"] = res 

    statusjson = json.dumps(status)

    print(statusjson)

    js = "<html> <body>OK THIS WoRKS</body></html>"

    resp = Response(statusjson, status=200, mimetype='application/json')
    ##resp.headers['Link'] = 'http://google.com'

    return resp


@app.route("/dummy", methods=['GET', 'POST'])
def dummy():

    ##res = request.json

    js = "<html> <body>OK THIS WoRKS</body></html>"

    resp = Response(js, status=200, mimetype='text/html')
    ##resp.headers['Link'] = 'http://google.com'

    return resp

@app.route("/api", methods=["GET"])
def index():
    if request.method == "GET":
        return {"hello": "world"}
    else:
        return {"error": 400}


if __name__ == "__main__":
    app.run(debug=True, host = 'localhost', port = 8002)
    # app.run(debug=True, host = '45.79.199.42', port = 8002)
