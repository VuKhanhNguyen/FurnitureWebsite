from fastapi import APIRouter
from app.schemas.user_schemas import RegisterUserSchema, UserSchema, LoginUserSchema, LoginUserResponseSchema
from app.models.user_model import User
from app.db.base import get_db
from sqlalchemy.orm import Session
from fastapi import Depends
from app.schemas.base_schema import DataResponse
from app.core.security import hash_password, verify_password, create_access_token
from app.middleware.authenticate import authenticate

router = APIRouter()

@router.get("/users", tags=["users"], description="Get all users")
async def get_users():
    return {"message": "Users page"}

@router.post("/users", tags=["users"], description="Create a new user")
async def create_user():
    return {"message": "Create user page"}

@router.put("/users", tags=["users"], description="Update a user")
async def update_user():
    return {"message": "Update user page"}

@router.delete("/users", tags=["users"], description="Delete a user")
async def delete_user():
    return {"message": "Delete user page"}


from datetime import datetime
from sqlalchemy.exc import IntegrityError

@router.post("/register", tags=["users"], description="Register a new user", response_model=DataResponse[UserSchema])
async def register_user(data: RegisterUserSchema, db: Session = Depends(get_db)):
    # Kiểm tra email hoặc username đã tồn tại chưa
    existing_user = db.query(User).filter((User.email == data.email) | (User.username == data.username)).first()
    if existing_user:
        return DataResponse.custom_response(code="409", message="Email hoặc username đã tồn tại", data=None)

    password_hash = hash_password(data.password)
    now = datetime.utcnow()
    user = User(
        username=data.username,
        password_hash=password_hash,
        email=data.email,
        full_name=getattr(data, "full_name", None),
        phone=getattr(data, "phone", None),
        role=getattr(data, "role", "customer"),
        avatar=getattr(data, "avatar", None),
        created_at=now,
        updated_at=now,
        status="active"
    )
    try:
        db.add(user)
        db.commit()
        db.refresh(user)
        return DataResponse.custom_response(code="201", message="Register user success", data=user)
    except IntegrityError:
        db.rollback()
        return DataResponse.custom_response(code="409", message="Email or username already exists", data=None)
    except Exception as e:
        db.rollback()
        return DataResponse.custom_response(code="500", message="Register user failed", data=None)


@router.post("/login", tags=["users"], description="Login a user", response_model=DataResponse[LoginUserResponseSchema])
async def login_user(data: LoginUserSchema, db: Session = Depends(get_db)):
    # Đăng nhập bằng username thay vì email
    user = db.query(User).filter(User.username == data.username).first()
    if not user:
        return DataResponse.custom_response(code="401", message="Invalid username or password", data=None)
    # Lưu ý: trường password_hash thay vì password
    if not verify_password(data.password, user.password_hash):
        return DataResponse.custom_response(code="401", message="Invalid username or password", data=None)
    token = create_access_token(user.id)
    return DataResponse.custom_response(code="200", message="Login user success", data=LoginUserResponseSchema(access_token=token, token_type="Bearer"))

@router.get("/me", tags=["users"], description="Get current user", response_model=DataResponse[UserSchema], dependencies=[Depends(authenticate)])
async def get_current_user(current_user: User = Depends(authenticate)):
    return DataResponse.custom_response(code="200", message="Get current user success", data=current_user)