from app.models.base_model import BaseModel
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship

class Cart(BaseModel):
    __tablename__ = "carts"
    id: int = Column(Integer, primary_key=True, index=True)
    user_id: int = Column(Integer, ForeignKey("users.id"), unique=True)

    items = relationship("CartItem", back_populates="cart", cascade="all, delete-orphan")