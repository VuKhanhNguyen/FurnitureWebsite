import React from "react";
import ProductCards from "./productCards";

export function BestSellers() {
  return (
    <section className="furniture-seller section-space">
      <div className="container">
        <div className="section-title-wrapper-4 mb-40">
          <span className="section-subtitle-4 mb-10">Tuần này</span>
          <h2 className="section-title-4">Bán chạy nhất</h2>
        </div>
        <div className="row g-4">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <ProductCards />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <ProductCards />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <ProductCards />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <ProductCards />
          </div>
        </div>
      </div>
    </section>
  );
}
export default BestSellers;
