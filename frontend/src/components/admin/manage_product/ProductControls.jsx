import React from "react";
import { FaSearch } from "react-icons/fa";

const ProductControls = ({ searchTerm, onSearchChange, onCategoryChange, onStatusChange }) => {
  return (
    <div className="product-controls">
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <select className="filter-select" onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="">Tất cả danh mục</option>
          <option value="Ghế">Ghế</option>
          <option value="Bàn">Bàn</option>
          <option value="Tủ">Tủ</option>
          <option value="Giường">Giường</option>
          <option value="Kệ">Kệ</option>
        </select>
        <select className="filter-select" onChange={(e) => onStatusChange(e.target.value)}>
          <option value="">Tất cả trạng thái</option>
          <option value="Còn hàng">Còn hàng</option>
          <option value="Hết hàng">Hết hàng</option>
        </select>
      </div>
    </div>
  );
};

export default ProductControls;
