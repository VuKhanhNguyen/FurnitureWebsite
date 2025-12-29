from app.models.base_model import BaseModel
from sqlalchemy.orm import relationship
from sqlalchemy import Column, String, Float, DateTime, Integer, ForeignKey
from datetime import datetime

class Product(BaseModel):
    __tablename__ = "products"
    id: int = Column(Integer, primary_key=True, index=True)
    name: str = Column(String(255), index=True)
    description: str = Column(String(1000), index=False)
    short_description: str = Column(String(500), index=False)
    price: float = Column(Float, index=True)
    sale_price: float = Column(Float, index=True, default=0.0)
    quantity: int = Column(Integer, index=True, default=0)
    average_rating:float = Column(Float, index=True, default=0.0)
    tags: str = Column(String(500), index=False)
    created_at: datetime = Column(DateTime, index=True, default=datetime.now)
    updated_at: datetime = Column(DateTime, index=True, nullable=True)
    deleted_at: datetime = Column(DateTime, index=True, nullable=True)
    category_id = Column(Integer, ForeignKey("categories.id"))
    category = relationship("Category", back_populates="products")