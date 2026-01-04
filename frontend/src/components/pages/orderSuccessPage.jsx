import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../commons/Header.jsx";
import Footer from "../commons/Footer.jsx";
import Offcanvas from "../commons/OffCanvas.jsx";
import CheckoutBanner from "../banners/checkoutBanner.jsx";

export function OrderSuccessPage({ showOffcanvas, setShowOffcanvas }) {
  const location = useLocation();

  const params = new URLSearchParams(location.search || "");
  const method = String(params.get("method") || "").toLowerCase();
  const orderId = params.get("order_id") || "";

  const title =
    method === "vnpay" ? "Thanh toán thành công" : "Đặt hàng thành công";
  const description =
    method === "vnpay"
      ? "Cảm ơn bạn! Thanh toán VNPay đã được ghi nhận."
      : "Cảm ơn bạn! Đơn hàng của bạn đã được tạo.";

  return (
    <React.Fragment>
      <Header onOpenOffcanvas={() => setShowOffcanvas(true)} />
      <Offcanvas show={showOffcanvas} onClose={() => setShowOffcanvas(false)} />
      <CheckoutBanner />

      <section className="checkout-area section-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="your-order">
                <h3>{title}</h3>
                <div style={{ marginTop: 10 }}>
                  <div>{description}</div>
                  {orderId ? (
                    <div style={{ marginTop: 8 }}>
                      Mã đơn hàng: <b>{orderId}</b>
                    </div>
                  ) : null}
                </div>

                <div className="order-button-payment mt-20">
                  <Link className="fill-btn" to="/">
                    <span className="fill-btn-inner">
                      <span className="fill-btn-normal">Về trang chủ</span>
                      <span className="fill-btn-hover">Về trang chủ</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default OrderSuccessPage;
