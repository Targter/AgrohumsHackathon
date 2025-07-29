from flask import Flask, request, send_from_directory, jsonify
from flask_cors import CORS  # Import CORS
import numpy as np
import pickle
app = Flask(__name__)
# CORS(app)  # Initialize CORS
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})  # Ensure correct origin

# CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
model = pickle.load(open('model.pkl', 'rb'))

# @app.route('/')
# def index():
#     return send_from_directory(app.static_folder, 'index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    print('this form data',data)
    Temparature = float(data['temperature'])
    Humidity = float(data['humidity'])
    Moisture = int(data['moisture'])
    Soil_Type = data['soilType']
    Crop_Type = data['cropType']
    Nitrogen = int(data['nitrogen'])
    Potassium = int(data['potassium'])
    Phosphorous = int(data['phosphorus'])

    soil_type_encoded = encode_soil_type(Soil_Type)
    crop_type_encoded = encode_crop_type(Crop_Type)

    features_list = [Temparature, Humidity, Moisture, Nitrogen, Potassium, Phosphorous]
    single_pred = np.array(features_list).reshape(1, -1)

    if single_pred.shape[1] != 6:
        return jsonify({"error": "Input data has incorrect number of features!"})

    prediction = model.predict(single_pred)
    fertilizer_dict = {1: "Urea", 2: "DAP", 3: "28-28", 4: "14-35-14", 5: "20-20", 6: "17-17-17", 7: "10-26-26"}

    result = fertilizer_dict.get(prediction[0], "Sorry, we are not able to recommend a proper fertilizer for this environment.")
    return jsonify({"result": result})


print("this will work")
def encode_soil_type(soil_type):
    soil_type_dict = {'loamy': 0, 'sandy': 1, 'clayey': 2, 'black': 3, 'red': 4}
    return soil_type_dict.get(soil_type, -1)

def encode_crop_type(crop_type):
    crop_type_dict = {'Sugarcane': 0, 'Cotton': 1, 'Millets': 2, 'Paddy': 3, 'Pulses': 4, 'Wheat': 5, 'Tobacco': 6, 'Barley': 7, 'Oil seeds': 8, 'Ground Nuts': 9, 'Maize': 10}
    return crop_type_dict.get(crop_type, -1)

if __name__ == "__main__":
    app.run(debug=True)
