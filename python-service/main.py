from flask import (
    Flask,
    request,
)
from flask_cors import CORS

import decoders
import db
from pydantic import ValidationError

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

@app.route('/ping', methods=['GET'])
def ping():
    return "Ping", 200
    
@app.route('/send_order', methods=['POST'])
def send_order():
    try:
        order = decoders.SendOrderDecoder.parse_obj(request.json)
    except ValidationError:
        return 'Invalid format', 400
        
    user = db.get_user_by_email(order.email)
    if user is None:
        return 'User doesn\'t exist', 404
        
    db.save_order(order.email, order.ordered_item)
    
    return 'Order received', 200
    
def create_app():
    return app
    
if __name__ == "__main__":
    app.run(debug=True, port=5005)