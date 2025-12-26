import React from "react";
import ProductCards from "./productCards";
export function ProductsList() {
  return (
    <section class="bd-product__area section-space">
      <div class="container">
        <div class="row">
          <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div class="bd-product__result mb-30">
              <h4>20 Sản phẩm trong danh sách</h4>
            </div>
          </div>
          <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
            <div class="product__filter-wrapper d-flex flex-wrap gap-3 align-items-center justify-content-md-end mb-30">
              <div class="bd-product__filter-btn">
                <button type="button">
                  <i class="fa-solid fa-list"></i> Lọc theo danh mục
                </button>
              </div>
              <div class="product__filter-count d-flex align-items-center">
                <div class="btn-dropdown__options">
                  <select>
                    <option>Hiển thị 20</option>
                    <option>Tuần vừa qua</option>
                    <option>Tháng vừa qua</option>
                    <option>Năm vừa qua</option>
                    <option>Tất cả thời gian</option>
                  </select>
                </div>
                <div
                  class="bd-product__filter-style nav nav-tabs"
                  role="tablist"
                >
                  <button
                    class="nav-link active"
                    id="nav-grid-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-grid"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i class="fa-solid fa-grid"></i>
                  </button>
                  <button
                    class="nav-link"
                    id="nav-list-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-list"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i class="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xxl-12">
            <div class="product__filter-tab">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade active show"
                  id="nav-grid"
                  role="tabpanel"
                  aria-labelledby="nav-grid-tab"
                >
                  <div class="row g-5">
                    <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                      <ProductCards />
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
