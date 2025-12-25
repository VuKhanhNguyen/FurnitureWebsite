import React from "react";
import adDiscount from "../../assets/imgs/ad-discount.png";
import adTimer from "../../assets/imgs/ad-timer.png";

export function HotDeal() {
  return (
    <section className="furniture-ad pb-100" style={{ marginTop: "0px" }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-xxl-7 col-xl-6">
            <div
              className="furniture-ad__item h-100 bg-image"
              style={{ backgroundImage: `url(${adDiscount})` }}
            >
              <div className="fad-content">
                <h6 className="text-white mb-20 text-uppercase">
                  Nội thất GIÁ SỐC
                </h6>
                <h2 className="text-capitalize text-white">
                  Ưu đãi có giới hạn <br />
                  Giảm 30%
                </h2>
                <a className="border__btn-f mt-35" href="product-details.html">
                  Mua ngay
                  <span>
                    <i className="fa-regular fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div
              className="furniture-ad__item h-100 bg-image"
              style={{ backgroundImage: `url(${adTimer})` }}
            >
              <div className="fad-content fad-timer text-center">
                <h6 className="text-white mb-20 text-uppercase">
                  Nội thất GIÁ SỐC
                </h6>
                <h2 className="text-capitalize text-white mb-30">
                  Ưu đãi trong tuần
                </h2>
                <div className="countdown-wrapper">
                  <ul>
                    <li>
                      <span id="days">24</span>ngày
                    </li>
                    <li>
                      <span id="hours">1</span>giờ
                    </li>
                    <li>
                      <span id="minutes">7</span>phút
                    </li>
                    <li>
                      <span id="seconds">43</span>giây
                    </li>
                  </ul>
                </div>
                <a className="border__btn-f mt-40" href="product-details.html">
                  Mua ngay
                  <span>
                    <i className="fa-regular fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HotDeal;
