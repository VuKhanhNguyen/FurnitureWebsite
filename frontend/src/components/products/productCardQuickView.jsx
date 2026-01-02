import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const ProductCardQuickView = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  // Reset quantity when product changes
  useEffect(() => {
    setQuantity(1);
  }, [product]);

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

  if (!product) return null;

  // Calculate discount
  const hasDiscount =
    product.sale_price > 0 && product.sale_price < product.price;

  // Image path
  const imageUrl = product.image
    ? `/uploads/products/${product.image}`
    : "assets/imgs/product1.png";

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
                        {/* Thumbnail tabs removed as we only have 1 image for now */}
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
                                <img src={imageUrl} alt={product.name} />
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
                                <img src={imageUrl} alt={product.name} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6">
                      <div className="product__details-content">
                        <div className="product__details-top d-flex flex-wrap gap-3 align-items-center mb-15">
                          {/* <div className="product__details-tag">
                            <a href="#">Construction</a>
                          </div> */}
                          <div className="product__details-rating">
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
                              <i className="fa-solid fa-star"></i>
                            </a>
                          </div>
                          <div className="product__details-review-count">
                            <a href="#">0 Đánh giá</a>
                          </div>
                        </div>
                        <h3 className="product__details-title">
                          {product.name}
                        </h3>
                        <div className="product__details-price">
                          {hasDiscount && (
                            <span className="old-price">
                              {product.price.toLocaleString("vi-VN")}₫
                            </span>
                          )}
                          <span className="new-price">
                            {(hasDiscount
                              ? product.sale_price
                              : product.price
                            ).toLocaleString("vi-VN")}
                            ₫
                          </span>
                        </div>
                        <p>
                          {product.short_description || product.description}
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
                          {/* <div className="sku">
                            <span>SKU:</span>
                            <a href="#">BO1D0MX8SJ</a>
                          </div> */}
                          {/* <div className="categories">
                            <span>Danh mục:</span> <a href="#">Milk,</a>
                            <a href="#">Cream,</a> <a href="#">Fermented.</a>
                          </div> */}
                          <div className="tag">
                            <span>Tags:</span> <span>{product.tags}</span>
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
