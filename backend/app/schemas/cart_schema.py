from pydantic import BaseModel
from typing import List
from app.schemas.cart_item_schema import CartItemSchema

class CartSchema(BaseModel):
    id: int
    user_id: int
    items: List[CartItemSchema] = []

    class Config:
        from_attributes = True

class CreateCartSchema(BaseModel):
    user_id: int

class UpdateCartSchema(BaseModel):
    pass