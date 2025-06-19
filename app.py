from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS
import asyncio
import base64
import json
import os
from websockets.client import connect
from dotenv import load_dotenv
from threading import Thread
import subprocess
import signal

app = Flask(__name__)
CORS(app)

model = joblib.load("ml_model.pkl")

load_dotenv()

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
GEMINI_MODEL = "gemini-2.0-flash-exp"
GEMINI_URI = f"wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent?key={GEMINI_API_KEY}"

# Global variable to hold the main.py subprocess
voice_process = None

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

@app.route("/api/voice/start", methods=["POST"])
def start_voice_assistant():
    global voice_process
    if voice_process is None or voice_process.poll() is not None:
        voice_process = subprocess.Popen(["python", "main.py"])
        return jsonify({"status": "Voice assistant started"})
    else:
        return jsonify({"status": "Voice assistant already running"})

@app.route("/api/voice/stop", methods=["POST"])
def stop_voice_assistant():
    global voice_process
    if voice_process and voice_process.poll() is None:
        voice_process.terminate()
        voice_process.wait()
        voice_process = None
        return jsonify({"status": "Voice assistant stopped"})
    else:
        return jsonify({"status": "Voice assistant not running"})

if __name__ == "__main__":
    app.run(host="localhost", port=5000)
