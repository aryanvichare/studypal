import requests
import json

url = "http://eab600d88319.ngrok.io/quizify"



def getquiz(text):
    payload = {}
    payload ['text'] = text
    payload = json.dumps(payload)



# payload = "{"text\" : \"Machine vision (MV) is the technology and methods used to provide imaging-based automatic inspection and analysis for such applications as automatic inspection, process control, and robot guidance, usually in industry.\"\n}"
    headers = {
        'Content-Type': "application/json",
        'cache-control': "no-cache"
        }

    response = requests.request("POST", url, data=payload, headers=headers)

    print(response.text)

    jr =  json.loads(response.text)

    del jr['request']

    print (jr)

    return jr


# getquiz("Machine vision (MV) is the technology and methods used to provide imaging-based automatic inspection and analysis for such applications as automatic inspection, process control, and robot guidance, usually in industry.")

