import React, { useEffect } from "react";
import ProductCards from "./productCards.jsx";
import "../../assets/js/swiper.min.js";
export function TopSale() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    new Swiper(".furuniture-active", {
      navigation: {
        nextEl: ".discount-slider-button-next",
        prevEl: ".discount-slider-button-prev",
      },
      slidesPerView: 1,
      loop: true,
    });
  }, []);
  return (
    <section
      className="discount-area p-relative section-space pt-0"
      style={{ marginTop: "0px" }}
    >
      <div className="container">
        <div className="section-title-wrapper-4 mb-40 text-center">
          <span className="section-subtitle-4 mb-10">Bán chạy nhất </span>
          <h2 className="section-title-4">Sản phẩm nổi bật</h2>
        </div>
        <div className="discount-main p-relative">
          <div className="discount-slider-navigation furniture__navigation">
            <button type="button" className="discount-slider-button-prev">
              <i className="fa-regular fa-angle-left"></i>
            </button>
            <button type="button" className="discount-slider-button-next">
              <i className="fa-regular fa-angle-right"></i>
            </button>
          </div>
          <div className="row align-items-center">
            <div className="col-xxl-12">
              <div className="swiper furuniture-active">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
                    <ProductCards />
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
export default TopSale;
