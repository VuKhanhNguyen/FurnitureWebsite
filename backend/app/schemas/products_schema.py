from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ProductSchema(BaseModel):
    id: int
    name: str
    description: str
    short_description: str
    price: float
    sale_price: float
    quantity: int
    average_rating: float
    tags: str
    created_at: datetime
    updated_at: Optional[datetime] = None
    deleted_at: Optional[datetime]
    category_id: Optional[int]

    class Config:
        from_attributes = True

class CreateProductSchema(BaseModel):
    name: str
    description: str
    short_description: str
    price: float
    sale_price: Optional[float] = 0.0
    quantity: Optional[int] = 0
    tags: str
    category_id: Optional[int] = None

class UpdateProductSchema(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    short_description: Optional[str] = None
    price: Optional[float] = None
    sale_price: Optional[float] = None
    quantity: Optional[int] = None
    tags: Optional[str] = None