from app.models.base_model import BaseModel
from sqlalchemy import Column, String, Float, DateTime, Integer
from datetime import datetime

from sqlalchemy import Enum

class User(BaseModel):
    __tablename__ = "users"
    id: int = Column(Integer, primary_key=True, index=True, autoincrement=True)
    username: str = Column(String(50), unique=True, nullable=False, index=True)
    password_hash: str = Column(String(255), nullable=False)
    email: str = Column(String(100), unique=True, nullable=False, index=True)
    full_name: str = Column(String(100), nullable=True)
    phone: str = Column(String(20), nullable=True)
    role: str = Column(Enum('customer', 'admin', name='user_roles'), default='customer', nullable=False)
    avatar: str = Column(String(255), nullable=True)
    created_at: datetime = Column(DateTime, default=datetime.now, nullable=False)
    updated_at: datetime = Column(DateTime, default=datetime.now, onupdate=datetime.now, nullable=False)
    deleted_at: datetime = Column(DateTime, nullable=True)
    status: str = Column(Enum('active', 'banned', name='user_status'), default='active', nullable=False)