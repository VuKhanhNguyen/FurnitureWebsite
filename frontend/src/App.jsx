import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layouts/UserLayout";
import HomePage from "./components/pages/HomePage";
import ProductsListPage from "./components/pages/productListPage";
import ProductDetailPage from "./components/pages/productDetailPage";
import WishListPage from "./components/pages/wishListPage";
import CartPage from "./components/pages/cartPage";
import CheckoutPage from "./components/pages/checkoutPage";
import OrderSuccessPage from "./components/pages/orderSuccessPage";
import ContactPage from "./components/pages/contactPage";
import BlogListPage from "./components/pages/blogListPage";
import BlogDetailPage from "./components/pages/blogDetailPage";
import Login from "./components/login_register/login";
import Register from "./components/login_register/register";

import ForgotPassword from "./components/login_register/ForgotPassword";
import ProductCardQuickView from "./components/products/productCardQuickView";
import Profile from "./components/pages/Profile/Profile";

import DashBoard from "./components/admin/pages/DashBoard";
import ManageProduct from "./components/admin/pages/ManageProduct";
import AdminLayout from "./components/admin/commons/AdminLayout";

function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/productsList"
          element={
            <ProductsListPage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/productDetail/:id"
          element={
            <ProductDetailPage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/wishList"
          element={
            <WishListPage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/order-success"
          element={
            <OrderSuccessPage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/blogList"
          element={
            <BlogListPage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/blogDetail"
          element={
            <BlogDetailPage
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/productQuickView"
          element={
            <ProductCardQuickView
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              showOffcanvas={showOffcanvas}
              setShowOffcanvas={setShowOffcanvas}
            />
          }
        />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="/admin/product" element={<ManageProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
