from app.models.base_model import BaseModel
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship

class CartItem(BaseModel):
    __tablename__ = "cart_items"
    id: int = Column(Integer, primary_key=True, index=True)
    cart_id: int = Column(Integer, ForeignKey("carts.id"))
    product_id: int = Column(Integer, ForeignKey("products.id"))
    quantity: int = Column(Integer, default=1)

    cart = relationship("Cart", back_populates="items")