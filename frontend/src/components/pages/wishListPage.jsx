import React, { useState } from "react";
import WishListTable from "../wishList/wishListTable.jsx";
import WishListBanner from "../banners/wishlistBanner.jsx";
import Header from "../commons/Header.jsx";
import Footer from "../commons/Footer.jsx";
import Offcanvas from "../commons/OffCanvas.jsx";
export function WishListPage({ showOffcanvas, setShowOffcanvas }) {
  return (
    <React.Fragment>
      <Header onOpenOffcanvas={() => setShowOffcanvas(true)} />
      <Offcanvas show={showOffcanvas} onClose={() => setShowOffcanvas(false)} />
      <WishListBanner />

      <WishListTable />
      <Footer />
    </React.Fragment>
  );
}
export default WishListPage;
