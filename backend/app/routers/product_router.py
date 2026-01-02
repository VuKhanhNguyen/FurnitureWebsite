from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
from app.db.base import get_db
from sqlalchemy.orm import Session
from app.models.product_model import Product
from app.schemas.products_schema import CreateProductSchema, ProductSchema, UpdateProductSchema
from app.schemas.base_schema import DataResponse
from datetime import datetime
import os
import shutil
from typing import Optional


router = APIRouter(
    prefix="/products",
    tags=["products"]
)

UPLOAD_DIR = "uploads/products"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.get("/", description="Get all products", response_model=DataResponse[list[ProductSchema]])
async def get_products(db: Session = Depends(get_db)):
    products = db.query(Product).filter(Product.deleted_at == None).all()
    return DataResponse.custom_response(code="200", message="get all products", data=products)

@router.post("/", description="Create a new product", response_model=DataResponse[ProductSchema])
async def create_product(
    name: str = Form(...),
    description: str = Form(...),
    short_description: str = Form(...),
    price: float = Form(...),
    sale_price: float = Form(0.0),
    quantity: int = Form(0),
    tags: str = Form(...),
    category_id: Optional[int] = Form(None),
    file: UploadFile = File(None),
    db: Session = Depends(get_db)
):
    try:
        # Validate sale_price
        if sale_price > 0 and sale_price >= price:
            raise HTTPException(status_code=400, detail="Giá sale phải nhỏ hơn giá gốc")
        
        image_path = None
        if file and file.filename:
            filename = f"{datetime.now().timestamp()}_{file.filename}"
            filepath = os.path.join(UPLOAD_DIR, filename)
            with open(filepath, "wb") as buffer:
                shutil.copyfileobj(file.file, buffer)
            image_path = f"uploads/products/{filename}"
        
        db_product = Product(
            name=name,
            description=description,
            short_description=short_description,
            price=price,
            sale_price=sale_price,
            quantity=quantity,
            tags=tags,
            image=image_path,
            category_id=category_id
        )
        db.add(db_product)
        db.commit()
        db.refresh(db_product)
        return DataResponse.custom_response(code="201", message="create product", data=db_product)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{product_id}", description="Get a product by id", response_model=DataResponse[ProductSchema])
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        return DataResponse.custom_response(code="404", message="Product not found", data=None)
    return DataResponse.custom_response(code="200", message="Get product by id", data=product)

@router.delete("/{product_id}", description="Delete a product by id", response_model=DataResponse[ProductSchema])
def delete_product(product_id: int, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        return DataResponse.custom_response(code="404", message="Product not found", data=None)
    
    product.deleted_at = datetime.now()
    db.commit()
    return DataResponse.custom_response(code="200", message="Delete product by id", data=None)

@router.put("/{product_id}", description="Update a product by id", response_model=DataResponse[ProductSchema])
def update_product(product_id: int, data: UpdateProductSchema, db: Session = Depends(get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        return DataResponse.custom_response(code="404", message="Product not found", data=None)
    
    update_data = data.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(product, key, value)
    db.commit()
    db.refresh(product)
    return DataResponse.custom_response(code="200", message="Update product by id", data=product)
