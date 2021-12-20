from pydantic import BaseModel

class SendOrderDecoder(BaseModel):
    email: str 
    ordered_item: str