from pydantic import BaseModel
from typing import Optional

class CartItemSchema(BaseModel):
    id: int
    cart_id: int
    product_id: int
    quantity: int

    class Config:
        from_attributes = True

class CreateCartItemSchema(BaseModel):
    cart_id: int
    product_id: int
    quantity: Optional[int] = 1

class UpdateCartItemSchema(BaseModel):
    quantity: int