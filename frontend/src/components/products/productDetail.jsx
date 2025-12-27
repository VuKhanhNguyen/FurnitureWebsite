import React from "react";
import detail1 from "../../assets/imgs/details-04.png";
import detail2 from "../../assets/imgs/details-05.png";
import detail3 from "../../assets/imgs/details-06.png";
import ProductTab from "./productTab";

export function ProductDetail() {
  return (
    <div className="product__details-area section-space-medium">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-lg-6">
            <div className="product__details-thumb-wrapper d-sm-flex align-items-start mr-50">
              <div className="product__details-thumb-tab mr-20">
                <nav>
                  <div
                    className="nav nav-tabs flex-nowrap flex-sm-column"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="img-1-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#img-1"
                      type="button"
                      role="tab"
                      aria-controls="img-1"
                      aria-selected="true"
                    >
                      <img src={detail1} alt="product-sm-thumb" />
                    </button>
                    <button
                      className="nav-link"
                      id="img-2-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#img-2"
                      type="button"
                      role="tab"
                      aria-controls="img-3"
                      aria-selected="false"
                    >
                      <img src={detail2} alt="product-sm-thumb" />
                    </button>
                    <button
                      className="nav-link"
                      id="img-3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#img-3"
                      type="button"
                      role="tab"
                      aria-controls="img-3"
                      aria-selected="false"
                    >
                      <img src={detail3} alt="product-sm-thumb" />
                    </button>
                  </div>
                </nav>
              </div>
              <div className="product__details-thumb-tab-content">
                <div className="tab-content" id="productthumbcontent">
                  <div
                    className="tab-pane fade show active"
                    id="img-1"
                    role="tabpanel"
                    aria-labelledby="img-1-tab"
                  >
                    <div className="product__details-thumb-big w-img">
                      <img src={detail1} alt="" />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="img-2"
                    role="tabpanel"
                    aria-labelledby="img-2-tab"
                  >
                    <div className="product__details-thumb-big w-img">
                      <img src={detail2} alt="" />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="img-3"
                    role="tabpanel"
                    aria-labelledby="img-3-tab"
                  >
                    <div className="product__details-thumb-big w-img">
                      <img src={detail3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="product__details-content pr-80">
              <div className="product__details-top d-sm-flex align-items-center mb-15">
                <div className="product__details-tag mr-10">
                  <a href="#">Construction</a>
                </div>
                <div className="product__details-rating mr-10">
                  <a href="#">
                    <i className="fa-solid fa-star"></i>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-star"></i>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-star"></i>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-star"></i>
                  </a>
                  <a href="#">
                    <i className="fa-regular fa-star"></i>
                  </a>
                </div>
                <div className="product__details-review-count">
                  <a href="#">10 Đánh giá</a>
                </div>
              </div>
              <h3 className="product__details-title text-capitalize">
                Alexander roll Arm sofa
              </h3>
              <div className="product__details-price">
                <span className="old-price">30.000₫</span>
                <span className="new-price">19.000₫</span>
              </div>
              <p>
                Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23.
                It is a completely modern design and you feel comfortable to put
                on this hijab. Buy it at the best price.
              </p>

              <div className="product__details-action mb-35">
                <div className="product__quantity">
                  <div className="product-quantity-wrapper">
                    <form action="#">
                      <button className="cart-minus">
                        <i className="fa-light fa-minus"></i>
                      </button>
                      <input className="cart-input" type="text" value="1" />
                      <button className="cart-plus">
                        <i className="fa-light fa-plus"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product__add-cart">
                  <a href="javascript:void(0)" className="fill-btn cart-btn">
                    <span className="fill-btn-inner">
                      <span className="fill-btn-normal">
                        Thêm vào giỏ
                        <i className="fa-solid fa-basket-shopping"></i>
                      </span>
                      <span className="fill-btn-hover">
                        Thêm vào giỏ
                        <i className="fa-solid fa-basket-shopping"></i>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="product__add-wish">
                  <a href="#" className="product__add-wish-btn">
                    <i className="fa-solid fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="product__details-meta mb-20">
                <div className="sku">
                  <span>SKU:</span>
                  <a href="#">BO1D0MX8SJ</a>
                </div>
                <div className="categories">
                  <span>Danh mục:</span> <a href="#">Milk,</a>
                  <a href="#">Cream,</a> <a href="#">Fermented.</a>
                </div>
                <div className="tag">
                  <span>Tags:</span> <a href="#"> Cheese,</a>
                  <a href="#">Custard,</a> <a href="#">Frozen</a>
                </div>
              </div>
              <div className="product__details-share">
                <span>Chia sẻ:</span>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ProductTab />
      </div>
    </div>
  );
}
export default ProductDetail;
