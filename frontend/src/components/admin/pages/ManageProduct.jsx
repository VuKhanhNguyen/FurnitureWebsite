import React, { useMemo, useState, useEffect } from "react";
import ProductHeader from "../manage_product/ProductHeader";
import ProductControls from "../manage_product/ProductControls";
import ProductTable from "../manage_product/ProductTable";
import Pagination from "../manage_product/Pagination";
import AddProduct from "../manage_product/AddProduct";
import EditProduct from "../manage_product/EditProduct";
import ViewProduct from "../manage_product/ViewProduct";
import productService from "../../../services/productService";
import categoryService from "../../../services/categoryService";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [viewingProductId, setViewingProductId] = useState(null);

  // Lấy dữ liệu từ API
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getAllProducts();
      setProducts(data || []);
    } catch (error) {
      console.error("Lỗi khi lấy sản phẩm:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await categoryService.getAllCategories();
      setCategories(data || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh mục:", error);
      setCategories([]);
    }
  };

  const handleAddProduct = () => {
    setShowAddForm(true);
  };

  const handleSubmitProduct = async (productData, imageFile) => {
    try {
      await productService.createProduct(productData, imageFile);
      setShowAddForm(false);
      fetchProducts();
      alert("Thêm sản phẩm thành công!");
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      alert("Thêm sản phẩm thất bại!");
    }
  };

  const handleCancelAdd = () => {
    setShowAddForm(false);
  };

  const handleViewProduct = (id) => {
    setViewingProductId(id);
  };

  const handleCloseView = () => {
    setViewingProductId(null);
  };

  const handleEditProduct = (id) => {
    setViewingProductId(null);
    setEditingProductId(id);
  };

  const handleSubmitEdit = async (productData) => {
    try {
      await productService.updateProduct(editingProductId, productData);
      setEditingProductId(null);
      fetchProducts();
      alert("Cập nhật sản phẩm thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật sản phẩm:", error);
      alert("Cập nhật sản phẩm thất bại!");
    }
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await productService.deleteProduct(id);
      setViewingProductId(null);
      fetchProducts();
      alert("Xóa sản phẩm thành công!");
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      alert("Xóa sản phẩm thất bại!");
    }
  };

  const normalizeText = (value) => {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d")
      .toLowerCase()
      .trim();
  };

  const pageSize = 7;

  const filteredProducts = useMemo(() => {
    return (products || []).filter((product) => {
      const matchSearch = normalizeText(product?.name).includes(
        normalizeText(searchTerm)
      );
      const selectedCategoryId = categoryFilter ? Number(categoryFilter) : null;
      const productCategoryId =
        product?.category_id ?? product?.category?.id ?? null;
      const matchCategory =
        !selectedCategoryId || productCategoryId === selectedCategoryId;

      const qty = Number(product?.quantity ?? 0);
      const matchStatus =
        !statusFilter ||
        (statusFilter === "in_stock"
          ? qty > 0
          : statusFilter === "out_of_stock"
          ? qty <= 0
          : true);
      return matchSearch && matchCategory && matchStatus;
    });
  }, [products, searchTerm, categoryFilter, statusFilter]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  }, [filteredProducts.length]);

  useEffect(() => {
    // Reset to first page when filters/search change
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, statusFilter]);

  useEffect(() => {
    // Clamp currentPage when data shrinks
    setCurrentPage((p) => Math.min(Math.max(1, p), totalPages));
  }, [totalPages]);

  const pagedProducts = useMemo(() => {
    const safePage = Math.min(Math.max(1, currentPage), totalPages);
    const start = (safePage - 1) * pageSize;
    return filteredProducts.slice(start, start + pageSize);
  }, [filteredProducts, currentPage, totalPages]);

  if (loading) {
    return (
      <div className="manage-product">
        <div style={{ textAlign: "center", padding: "3rem" }}>
          <p style={{ fontSize: "1.2rem", color: "#667eea" }}>
            Đang tải dữ liệu...
          </p>
        </div>
      </div>
    );
  }

  if (showAddForm) {
    return (
      <div className="manage-product">
        <AddProduct onSubmit={handleSubmitProduct} onCancel={handleCancelAdd} />
      </div>
    );
  }

  if (viewingProductId) {
    return (
      <div className="manage-product">
        <ViewProduct
          productId={viewingProductId}
          onClose={handleCloseView}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </div>
    );
  }

  if (editingProductId) {
    return (
      <div className="manage-product">
        <EditProduct
          productId={editingProductId}
          onSubmit={handleSubmitEdit}
          onCancel={handleCancelEdit}
        />
      </div>
    );
  }

  return (
    <div className="manage-product">
      <ProductHeader onAddClick={handleAddProduct} />
      <ProductControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categories}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />
      <ProductTable
        products={pagedProducts}
        onView={handleViewProduct}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ManageProduct;
