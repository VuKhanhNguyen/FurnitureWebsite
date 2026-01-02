from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.base import get_db
from app.models.review_model import Review
from app.models.user_model import User
from app.schemas.review_schema import ReviewCreate, ReviewResponse, ReviewUpdate
from app.schemas.base_schema import DataResponse
from app.middleware.authenticate import authenticate
from typing import List

router = APIRouter(
    prefix="/reviews",
    tags=["reviews"]
)

@router.post("/", description="Create a new review", response_model=DataResponse[ReviewResponse])
async def create_review(
    review_data: ReviewCreate,
    current_user: User = Depends(authenticate),
    db: Session = Depends(get_db)
):
    # Check if user already reviewed this product? (Optional, maybe allow multiple)
    # For now allow multiple.
    
    review = Review(
        user_id=current_user.id,
        product_id=review_data.product_id,
        rating=review_data.rating,
        comment=review_data.comment
    )
    db.add(review)
    db.commit()
    db.refresh(review)
    return DataResponse.custom_response(code="201", message="Review created successfully", data=review)

@router.get("/product/{product_id}", description="Get reviews for a product", response_model=DataResponse[List[ReviewResponse]])
async def get_product_reviews(product_id: int, db: Session = Depends(get_db)):
    reviews = db.query(Review).filter(
        Review.product_id == product_id
    ).all()
    return DataResponse.custom_response(code="200", message="Get reviews successfully", data=reviews)

@router.delete("/{review_id}", description="Delete a review", response_model=DataResponse[None])
async def delete_review(
    review_id: int, 
    current_user: User = Depends(authenticate),
    db: Session = Depends(get_db)
):
    review = db.query(Review).filter(Review.id == review_id).first()
    if not review:
        return DataResponse.custom_response(code="404", message="Review not found", data=None)
    
    # Allow admin or owner to delete
    if review.user_id != current_user.id and current_user.role != 'admin':
        return DataResponse.custom_response(code="403", message="Not authorized to delete this review", data=None)
        
    db.delete(review)
    db.commit()
    return DataResponse.custom_response(code="200", message="Review deleted successfully", data=None)
