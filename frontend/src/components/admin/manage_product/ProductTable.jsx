import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const ProductTable = ({ products, onView, onEdit, onDelete }) => {
  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Giá sale</th>
            <th>Số lượng</th>
            <th>Đánh giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td className="product-name">{product.name}</td>
              <td>
                <span className="category-badge">
                  {product.category?.name || "Chưa phân loại"}
                </span>
              </td>
              <td className="product-price">
                {product.price?.toLocaleString("vi-VN")}đ
              </td>
              <td className="product-price">
                {product.sale_price > 0 ? `${product.sale_price?.toLocaleString("vi-VN")}đ` : "-"}
              </td>
              <td className="product-stock">{product.quantity}</td>
              <td>
                <span className="category-badge">
                  {product.average_rating?.toFixed(1) || "0.0"} ⭐
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <button
                    className="btn-action btn-view"
                    title="Xem"
                    onClick={() => onView(product.id)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="btn-action btn-edit"
                    title="Sửa"
                    onClick={() => onEdit(product.id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="btn-action btn-delete"
                    title="Xóa"
                    onClick={() => onDelete(product.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
