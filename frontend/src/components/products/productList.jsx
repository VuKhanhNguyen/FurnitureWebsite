import React from "react";
import ProductCards from "./productCards";
export function ProductsList() {
  return (
    <section className="bd-product__area section-space">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="bd-product__result mb-30">
              <h4>20 Sản phẩm trong danh sách</h4>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
            <div className="product__filter-wrapper d-flex flex-wrap gap-3 align-items-center justify-content-md-end mb-30">
              <div className="bd-product__filter-btn">
                <button type="button">
                  <i className="fa-solid fa-list"></i> Lọc
                </button>
              </div>
              <div className="header-search">
                <input type="text" placeholder="Tìm kiếm sản phẩm..." />
                <button type="button" aria-label="Tìm kiếm">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <div className="product__filter-tab">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="nav-grid"
                  role="tabpanel"
                  aria-labelledby="nav-grid-tab"
                >
                  <div className="row g-5">
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductsList;
