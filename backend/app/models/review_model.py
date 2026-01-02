from app.models.base_model import BaseModel
from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Float
from sqlalchemy.orm import relationship
from datetime import datetime

class Review(BaseModel):
    __tablename__ = "reviews"
    __allow_unmapped__ = True
    
    # review_id: int = Column(Integer, primary_key=True, index=True)
    rating = Column(Integer, index=True)
    comment = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.now)
    
    user_id = Column(Integer, ForeignKey("users.id"))
    product_id = Column(Integer, ForeignKey("products.id"))

    user = relationship("User", back_populates="reviews")
    product = relationship("Product", back_populates="reviews")
