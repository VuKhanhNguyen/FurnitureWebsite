import React, { useState, useEffect } from "react";
import { FaSave, FaTimes, FaUpload } from "react-icons/fa";
import categoryService from "../../../services/categoryService";
import "./AddProduct.css";

const AddProduct = ({ onSubmit, onCancel }) => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    short_description: "",
    price: "",
    sale_price: "",
    quantity: "",
    tags: "",
    category_id: "",
  });
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await categoryService.getAllCategories();
      setCategories(data || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh mục:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const price = parseFloat(formData.price);
    const salePrice = parseFloat(formData.sale_price) || 0;

    if (salePrice > 0 && salePrice >= price) {
      newErrors.sale_price = "Giá sale phải nhỏ hơn giá gốc";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      sale_price: parseFloat(formData.sale_price) || 0,
      quantity: parseInt(formData.quantity) || 0,
      category_id: formData.category_id ? parseInt(formData.category_id) : null,
    };

    try {
      await onSubmit(productData, imageFile);
    } catch (error) {
      console.error("Lỗi chi tiết:", error);
      if (error.response?.data?.detail) {
        const detail = error.response.data.detail;
        if (typeof detail === "string") {
          setErrors({ general: detail });
        } else if (Array.isArray(detail)) {
          const fieldErrors = {};
          detail.forEach((err) => {
            if (err.loc && err.loc.length > 1) {
              fieldErrors[err.loc[1]] = err.msg;
            }
          });
          setErrors(fieldErrors);
        }
      } else {
        setErrors({ general: "Lỗi không xác định khi thêm sản phẩm" });
      }
    }
  };

  return (
    <div className="add-product-container">
      <div className="add-product-header">
        <h2>Thêm Sản Phẩm Mới</h2>
        <button className="btn-close" onClick={onCancel}>
          <FaTimes />
        </button>
      </div>

      {errors.general && <div className="form-error">{errors.general}</div>}

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-row">
          <div className="form-group">
            <label>Tên sản phẩm *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nhập tên sản phẩm"
            />
          </div>

          <div className="form-group">
            <label>Danh mục</label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
            >
              <option value="">Chọn danh mục</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Hình ảnh</label>
          <div className="image-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="image-input"
              style={{ display: "none" }}
            />
            <label htmlFor="image-input" className="upload-btn">
              <FaUpload /> Chọn ảnh
            </label>
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            )}
          </div>
        </div>

        <div className="form-group">
          <label>Mô tả ngắn *</label>
          <input
            type="text"
            name="short_description"
            value={formData.short_description}
            onChange={handleChange}
            required
            placeholder="Mô tả ngắn gọn về sản phẩm"
          />
        </div>

        <div className="form-group">
          <label>Mô tả chi tiết *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Mô tả chi tiết về sản phẩm"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Giá *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="0"
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Giá sale</label>
            <input
              type="number"
              name="sale_price"
              value={formData.sale_price}
              onChange={handleChange}
              placeholder="0"
              min="0"
              style={errors.sale_price ? { borderColor: "#fc8181" } : undefined}
            />
            {errors.sale_price && (
              <span style={{ fontSize: 14, color: "#c53030", marginTop: 4 }}>
                {errors.sale_price}
              </span>
            )}
          </div>

          <div className="form-group">
            <label>Số lượng *</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              placeholder="0"
              min="0"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Tags</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="tag1, tag2, tag3"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn-cancel" onClick={onCancel}>
            <FaTimes /> Hủy
          </button>
          <button type="submit" className="btn-submit">
            <FaSave /> Lưu sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
