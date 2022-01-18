import json
from flask import Flask,render_template,request,jsonify
import numpy as np
import DiabetesClassificationModel as dcm
features = ["kids","glucose","bloodPressure","skinThickness","insulin","bmi","dpf","age"];
app = Flask(__name__)
def addBMILabel(input,value):
    if(value < 18.5):
        input.append(5)
    elif(value > 18.5 and value <= 24.9):
        input.append(0)
    elif(value > 24.9 and value <= 29.9):
        input.append(4)
    elif(value > 29.9 and value <= 34.9):
        input.append(1)
    elif(value > 34.9 and value <= 39.9):
        input.append(2)
    else:
        input.append(3)
        
def addInsulinLabel(input,value):
    if(value >= 16 and value <= 166):
        input.append(1)
    else:
        input.append(0)
def addglucoseLabel(input,value):
    if(value <= 70):
        input.append(1)
    elif(value > 70 and value <= 99):
        input.append(2)
    elif(value > 99 and value <= 126):
        input.append(3)
    else:
        input.append(0)
        
@app.route("/",methods = ["GET" , "POST"])
def home_page():
    if(request.method == "GET"):
        print("GET")
        return render_template(["index.html","styleTemp.css","index.js"])
    elif(request.method == "POST"):
        print("POST")
        input = []
        for feature in features :
            input.append(float(request.form[feature]));
            print(float(request.form[feature]));
        addBMILabel(input,input[5])
        addInsulinLabel(input,input[4])
        addglucoseLabel(input,input[1])
        pred_array = np.array(input);
        pred_array = pred_array.reshape(1,-1);
        print(pred_array);
        predict = dcm.predict(pred_array)
        if(predict == 1):
             output = "The patient is diabetic"
        else : output = "The patient is normal";
        print("output :",output)
        print("pred :" , predict)
        if(predict[0] == 0):
            #  return render_template(["index.html","index.css","index.js"],Yes = output);
            return jsonify({'result' : 0});
        else:
            # return render_template(["index.html","index.css","index.js"],No = output);
            return jsonify({'result' : 1});
            
        
if __name__ == "__main__":
    app.run(debug = True)