import React from "react";
import { createPortal } from "react-dom";
import detail1 from "../../assets/imgs/details-04.png";
import detail2 from "../../assets/imgs/details-05.png";
import detail3 from "../../assets/imgs/details-06.png";

export const ProductCardQuickView = ({ product, onClose }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setQuantity(val ? parseInt(val) : "");
  };

  const handleMinus = (e) => {
    e.preventDefault();
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handlePlus = (e) => {
    e.preventDefault();
    setQuantity((prev) => (prev ? prev + 1 : 1));
  };

  return createPortal(
    <div
      className="product-modal-sm modal show"
      style={{
        display: "block",
        background: "rgba(0,0,0,0.5)",
        position: "fixed",
        zIndex: 1050,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="product-modal">
            <div className="product-modal-wrapper p-relative">
              <button
                type="button"
                className="close product-modal-close"
                aria-label="Close"
                onClick={onClose}
              >
                <i className="fal fa-times"></i>
              </button>
              <div className="modal__inner">
                <div className="bd__shop-details-inner">
                  <div className="row">
                    <div className="col-xxl-6 col-lg-6">
                      <div className="product__details-thumb-wrapper d-sm-flex align-items-start">
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
                      <div className="product__details-content">
                        <div className="product__details-top d-flex flex-wrap gap-3 align-items-center mb-15">
                          <div className="product__details-tag">
                            <a href="#">Construction</a>
                          </div>
                          <div className="product__details-rating">
                            <a href="#">
                              <i className="fa-solid fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa-solid fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa-regular fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa-regular fa-star"></i>
                            </a>
                            <a href="#">
                              <i className="fa-regular fa-star"></i>
                            </a>
                          </div>
                          <div className="product__details-review-count">
                            <a href="#">10 Đánh giá</a>
                          </div>
                        </div>
                        <h3 className="product__details-title">
                          Disposable Surgical Face Mask
                        </h3>
                        <div className="product__details-price">
                          <span className="old-price">30.000₫</span>
                          <span className="new-price">19.000₫</span>
                        </div>
                        <p>
                          Priyoshop has brought to you the Hijab 3 Pieces Combo
                          Pack PS23. It is a completely modern design and you
                          feel comfortable to put on this hijab. Buy it at the
                          best price.
                        </p>

                        <div className="product__details-action mb-35">
                          <div className="product__quantity">
                            <div className="product-quantity-wrapper">
                              <form action="#">
                                <button
                                  className="cart-minus"
                                  onClick={handleMinus}
                                >
                                  <i className="fa-light fa-minus"></i>
                                </button>
                                <input
                                  className="cart-input"
                                  type="text"
                                  value={quantity}
                                  onChange={handleQuantityChange}
                                />
                                <button
                                  className="cart-plus"
                                  onClick={handlePlus}
                                >
                                  <i className="fa-light fa-plus"></i>
                                </button>
                              </form>
                            </div>
                          </div>
                          <div className="product__add-cart">
                            <a
                              href="javascript:void(0)"
                              className="fill-btn cart-btn"
                            >
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
                        <div className="product__details-meta">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default ProductCardQuickView;
