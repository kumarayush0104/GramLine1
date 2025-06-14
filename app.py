from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load("ml_model.pkl")

@app.route("/rank", methods=["POST"])
def rank_help_centers():
    data = request.json["centers"]  # List of dicts

    scored = []
    for c in data:
        x = np.array([[c["distance"], c["help_type"], c.get("rating", 4)]])
        score = model.predict_proba(x)[0][1]
        c["score"] = score
        scored.append(c)

    ranked = sorted(scored, key=lambda x: x["score"], reverse=True)
    return jsonify(ranked)

if __name__ == "__main__":
    app.run(port=5000)
