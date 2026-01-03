import React, { useState, useEffect } from "react";
import { FaTimes, FaEdit, FaTrash } from "react-icons/fa";
import productService from "../../../services/productService";
import "./ViewProduct.css";

const ViewProduct = ({ productId, onClose, onEdit, onDelete }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await productService.getProductById(productId);
      setProduct(data);
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết sản phẩm:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    onEdit(productId);
  };

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      onDelete(productId);
    }
  };

  if (loading) {
    return (
      <div className="view-product-container">
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <p style={{ fontSize: "1.2rem", color: "#667eea" }}>Đang tải...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="view-product-container">
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <p style={{ fontSize: "1.2rem", color: "#e53e3e" }}>
            Không tìm thấy sản phẩm
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="view-product-container">
      <div className="view-product-header">
        <h2 className="view-product-title">Chi Tiết Sản Phẩm</h2>
        <button
          onClick={onClose}
          className="view-product-close"
          aria-label="Đóng"
        >
          <FaTimes />
        </button>
      </div>

      <div className="view-product-content">
        <div>
          {product.image ? (
            <img
              src={
                product.image.startsWith("http")
                  ? product.image
                  : product.image.startsWith("/")
                  ? product.image
                  : `/uploads/products/${product.image}`
              }
              alt={product.name}
              className="view-product-image"
            />
          ) : (
            <div className="view-product-image-placeholder">
              Không có hình ảnh
            </div>
          )}
        </div>

        <div className="view-product-info">
          <div className="view-product-field">
            <label className="view-product-label">Tên sản phẩm</label>
            <span className="view-product-value view-product-name">
              {product.name}
            </span>
          </div>

          <div className="view-product-field">
            <label className="view-product-label">Mô tả ngắn</label>
            <span className="view-product-value">
              {product.short_description}
            </span>
          </div>

          <div className="view-product-grid-2">
            <div className="view-product-field">
              <label className="view-product-label">Giá gốc</label>
              <span className="view-product-price">
                {product.price?.toLocaleString("vi-VN")} VNĐ
              </span>
            </div>
            {product.sale_price > 0 && (
              <div className="view-product-field">
                <label className="view-product-label">Giá sale</label>
                <span className="view-product-sale-price">
                  {product.sale_price?.toLocaleString("vi-VN")} VNĐ
                </span>
              </div>
            )}
          </div>

          <div className="view-product-grid-2">
            <div className="view-product-field">
              <label className="view-product-label">Số lượng</label>
              <span className="view-product-value">{product.quantity}</span>
            </div>
            <div className="view-product-field">
              <label className="view-product-label">Đánh giá</label>
              <span className="view-product-value">
                {product.average_rating}/5 ⭐
              </span>
            </div>
          </div>

          <div className="view-product-field">
            <label className="view-product-label">Danh mục</label>
            <span
              className="view-product-badge"
              style={{ background: "#edf2f7", color: "#4a5568" }}
            >
              {product.category?.name || "Chưa phân loại"}
            </span>
          </div>

          <div className="view-product-field">
            <label className="view-product-label">Trạng thái</label>
            <span
              className="view-product-badge"
              style={{
                background: product.quantity > 0 ? "#c6f6d5" : "#fed7d7",
                color: product.quantity > 0 ? "#22543d" : "#742a2a",
              }}
            >
              {product.quantity > 0 ? "Còn hàng" : "Hết hàng"}
            </span>
          </div>

          {product.tags && (
            <div className="view-product-field">
              <label className="view-product-label">Tags</label>
              <span className="view-product-value">{product.tags}</span>
            </div>
          )}
        </div>
      </div>

      <div className="view-product-field">
        <label className="view-product-label">Mô tả chi tiết</label>
        <div className="view-product-detail view-product-value">
          {product.description}
        </div>
      </div>

      <div className="view-product-actions">
        <button onClick={onClose} className="view-product-btn secondary">
          <FaTimes /> Đóng
        </button>
        <button onClick={handleEdit} className="view-product-btn edit">
          <FaEdit /> Sửa
        </button>
        <button onClick={handleDelete} className="view-product-btn delete">
          <FaTrash /> Xóa
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
