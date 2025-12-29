from pydantic import BaseModel, ConfigDict
from pydantic import field_validator
import re
from typing import Optional

class UserSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    user_id: int
    username: str
    password_hash: str
    email: str
    full_name: Optional[str] = None
    phone: Optional[str] = None
    role: str = "customer"
    avatar: Optional[str] = None
    created_at: Optional[str] = None
    updated_at: Optional[str] = None
    deleted_at: Optional[str] = None
    status: str

class RegisterUserSchema(BaseModel):
    username: str
    password: str
    email: str
    full_name: Optional[str] = None
    phone: Optional[str] = None
    role: str = "customer"
    avatar: Optional[str] = None

    @field_validator('email')
    @classmethod
    def validate_email(cls, email: str):
        if not re.match(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', email):
            raise ValueError('Invalid email address')
        return email

    @field_validator('password')
    @classmethod
    def validate_password(cls, password: str):
        if len(password) < 8:
            raise ValueError('Password must be at least 8 characters long')
        return password

class LoginUserSchema(BaseModel):
    username: str
    password: str

class LoginUserResponseSchema(BaseModel):
    access_token: str
    token_type: str = "Bearer"

class TokenPayload(BaseModel):
    user_id: int
    exp: int