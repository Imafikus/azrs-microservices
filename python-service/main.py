from flask import (
    Flask,
    request,
    jsonify
)
from flask.wrappers import Request
import decoders
import db
from pydantic import ValidationError

app = Flask(__name__)

@app.route('/ping', methods=['GET'])
def ping():
    return "Ping", 200
    
@app.route('/make_order', methods=['POST'])
def make_order():
    try:
        order = decoders.SendOrderDecoder.parse_obj(request.json)
    except ValidationError:
        return 'Invalid format', 400
    
    print(f'Make order for email {order.email}, item: {order.ordered_item}')
    return 'Order received', 200
    
if __name__ == "__main__":
    app.run(debug=True, port=5005)