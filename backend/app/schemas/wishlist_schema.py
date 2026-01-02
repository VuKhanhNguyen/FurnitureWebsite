from pydantic import BaseModel
from datetime import datetime

class WishlistBase(BaseModel):
    product_id: int

class WishlistCreate(WishlistBase):
    pass

class WishlistResponse(WishlistBase):
    id: int
    user_id: int
    created_at: datetime
    
    class Config:
        from_attributes = True
