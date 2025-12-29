from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.base import get_db
from app.models.cart_model import Cart
from app.models.cart_item_model import CartItem
from app.schemas.cart_item_schema import CreateCartItemSchema, CartItemSchema, UpdateCartItemSchema
from app.schemas.base_schema import DataResponse

router = APIRouter(
    prefix="/cart-items",
    tags=["cart-items"]
)

@router.get("/", description="Get all cart items", response_model=DataResponse[list[CartItemSchema]])
async def get_all_cart_items(db: Session = Depends(get_db)):
    items = db.query(CartItem).all()
    return DataResponse.custom_response(code="200", message="Get all cart items success", data=items)

@router.get("/{cart_id}", description="Get all items in a cart", response_model=DataResponse[list[CartItemSchema]])
async def get_cart_items(cart_id: int, db: Session = Depends(get_db)):
    cart_exists = db.query(Cart).filter(Cart.cart_id == cart_id).first()
    if not cart_exists:
        return DataResponse.custom_response(code="404", message="Cart not found", data=None)

    items = db.query(CartItem).filter(CartItem.cart_id == cart_id).all()
    return DataResponse.custom_response(code="200", message="Get cart items success", data=items)

@router.post("/", description="Add item to cart (Merge if exists)", response_model=DataResponse[CartItemSchema])
async def create_cart_item(data: CreateCartItemSchema, db: Session = Depends(get_db)):
    cart_exists = db.query(Cart).filter(Cart.id == data.cart_id).first()
    if not cart_exists:
        return DataResponse.custom_response(code="404", message="Cart ID not found", data=None)

    existing_item = db.query(CartItem).filter(
        CartItem.cart_id == data.cart_id,
        CartItem.product_id == data.product_id
    ).first()

    if existing_item:
        existing_item.quantity += data.quantity
        db.commit()
        db.refresh(existing_item)
        return DataResponse.custom_response(code="200", message="Item quantity updated", data=existing_item)

    db_item = CartItem(**data.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return DataResponse.custom_response(code="201", message="Add item to cart success", data=db_item)

@router.put("/{cart_item_id}", description="Update cart item quantity", response_model=DataResponse[CartItemSchema])
def update_cart_item(cart_item_id: int, data: UpdateCartItemSchema, db: Session = Depends(get_db)):
    item = db.query(CartItem).filter(CartItem.id == cart_item_id).first()
    if not item:
        return DataResponse.custom_response(code="404", message="Cart item not found", data=None)

    update_data = data.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(item, key, value)

    db.commit()
    db.refresh(item)
    return DataResponse.custom_response(code="200", message="Update item success", data=item)

@router.delete("/{cart_item_id}", description="Remove item from cart", response_model=DataResponse[CartItemSchema])
def delete_cart_item(cart_item_id: int, db: Session = Depends(get_db)):
    item = db.query(CartItem).filter(CartItem.id == cart_item_id).first()
    if not item:
        return DataResponse.custom_response(code="404", message="Cart item not found", data=None)

    db.delete(item)
    db.commit()
    return DataResponse.custom_response(code="200", message="Remove item success", data=None)