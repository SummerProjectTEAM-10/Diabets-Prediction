import sys
print(sys.version, sys.platform, sys.executable)
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier

def predict(data) :
  dataset = pd.read_csv("./FINAL DATASET.csv")
  Random_Forest = RandomForestClassifier(bootstrap=True,criterion="entropy",max_depth=100,max_features=2,n_estimators=200)
  Random_Forest.fit(dataset.drop(['Outcome'],axis = 1),dataset['Outcome'])
  predict = Random_Forest.predict(data)
  return predict