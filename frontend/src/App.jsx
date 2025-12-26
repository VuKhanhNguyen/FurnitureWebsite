import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Header from "./components/commons/Header";
import Offcanvas from "./components/commons/OffCanvas";
import ProductsListPage from "./components/pages/productListPage";
import ProductDetailPage from "./components/pages/productDetailPage";
import WishListPage from "./components/pages/wishListPage";
import CartPage from "./components/pages/cartPage";
import CheckoutPage from "./components/pages/checkoutPage";
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
          path="/productDetail"
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
      </Routes>
    </Router>
  );
}

export default App;
