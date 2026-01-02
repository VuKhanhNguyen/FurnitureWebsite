from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.db.base import get_db
from app.db.base import engine
from app.models import Base
from app.routers.product_router import router as product_router
from app.routers.user_router import router as user_router_router

from app.routers.password_router import router as password_router
from app.routers.auth_router import router as auth_router
from app.routers.contact_router import router as contact_router
from fastapi.middleware.cors import CORSMiddleware

from app.routers.category_router import router as category_router
import os


Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Furniture",
    description="",
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(product_router, prefix="/api")
app.include_router(user_router_router, prefix="/api")
app.include_router(password_router, prefix="/api")
app.include_router(auth_router, prefix="/api")
app.include_router(contact_router, prefix="/api")

app.include_router(product_router, prefix="/api")
app.include_router(user_router_router, prefix="/api")
app.include_router(category_router, prefix="/api")

# Phục vụ file tĩnh
if not os.path.exists("uploads"):
    os.makedirs("uploads")
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")


@app.get("/home")
async def root():
    return {"message": "Hello World"}
