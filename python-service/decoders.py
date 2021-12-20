from typing import List
from pydantic import BaseModel

class SendOrderDecoder(BaseModel):
    email: str 
    ordered_items: List[str]