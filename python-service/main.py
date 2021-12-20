from flask import Flask
import decoders
import db

app = Flask(__name__)

@app.route('/ping')
def ping():
    return "Ping", 200
    

    
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5005)