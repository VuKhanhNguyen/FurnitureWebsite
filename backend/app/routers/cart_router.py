from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.base import get_db
from app.models.cart_model import Cart
from app.schemas.cart_schema import CreateCartSchema, CartSchema
from app.schemas.base_schema import DataResponse

router = APIRouter(
    prefix="/carts",
    tags=["carts"]
)

@router.get("/", description="Get all carts", response_model=DataResponse[list[CartSchema]])
async def get_all_carts(db: Session = Depends(get_db)):
    carts = db.query(Cart).all()
    return DataResponse.custom_response(code="200", message="Get all carts success", data=carts)

@router.get("/user/{user_id}", description="Get cart by user id", response_model=DataResponse[CartSchema])
async def get_cart_by_user(user_id: int, db: Session = Depends(get_db)):
    cart = db.query(Cart).filter(Cart.user_id == user_id).first()
    if not cart:
        return DataResponse.custom_response(code="404", message="Cart not found for this user", data=None)
    return DataResponse.custom_response(code="200", message="Get cart success", data=cart)

@router.post("/", description="Create a new cart or return existing one", response_model=DataResponse[CartSchema])
async def create_cart(data: CreateCartSchema, db: Session = Depends(get_db)):
    existing_cart = db.query(Cart).filter(Cart.user_id == data.user_id).first()
    if existing_cart:
        return DataResponse.custom_response(code="200", message="Cart already exists", data=existing_cart)

    db_cart = Cart(**data.model_dump())
    db.add(db_cart)
    db.commit()
    db.refresh(db_cart)
    return DataResponse.custom_response(code="201", message="Create cart success", data=db_cart)

@router.delete("/{cart_id}", description="Delete a cart", response_model=DataResponse[CartSchema])
def delete_cart(cart_id: int, db: Session = Depends(get_db)):
    cart = db.query(Cart).filter(Cart.id == cart_id).first()
    if not cart:
        return DataResponse.custom_response(code="404", message="Cart not found", data=None)

    db.delete(cart)
    db.commit()
    return DataResponse.custom_response(code="200", message="Delete cart success", data=None)