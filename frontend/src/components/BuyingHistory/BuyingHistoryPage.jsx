import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import Offcanvas from "../commons/OffCanvas";
import OrderList from "./OrderList";
import orderService from "../../services/orderService";
import bg from "../../assets/imgs/breadcrumb-bg-furniture.jpg";

const BuyingHistoryPage = ({ showOffcanvas, setShowOffcanvas }) => {
  const [activeTab, setActiveTab] = useState("status"); // 'status' or 'history'
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, [activeTab]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await orderService.getOrders(activeTab);
      if (res && res.data) {
        setOrders(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header onOpenOffcanvas={() => setShowOffcanvas(true)} />
      <Offcanvas show={showOffcanvas} onClose={() => setShowOffcanvas(false)} />

      <main>
        {/* Breadcrumb area */}
        <section className="breadcrumb__area theme-bg-1 p-relative z-index-11 pt-95 pb-95">
          <div
            className="breadcrumb__thumb"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-12">
                <div className="breadcrumb__wrapper text-center">
                  <h2 className="breadcrumb__title">Đơn hàng của tôi</h2>
                  <div className="breadcrumb__menu">
                    <nav>
                      <ul>
                        <li>
                          <span>
                            <Link to="/">Trang chủ</Link>
                          </span>
                        </li>
                        <li>
                          <span>Đơn hàng của tôi</span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Buying History Section */}
        <section className="buying-history-area pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="cart-page-title mb-30">
                  <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                    Đơn hàng của tôi
                  </h3>
                </div>
              </div>
              <div className="col-xl-10">
                <div className="buying-history-tabs mb-40">
                  <ul className="nav nav-tabs nav-fill" role="tablist">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "status" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("status")}
                        type="button"
                        style={{ fontWeight: "bold", fontSize: "16px" }}
                      >
                        Trạng thái đơn hàng
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTab === "history" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("history")}
                        type="button"
                        style={{ fontWeight: "bold", fontSize: "16px" }}
                      >
                        Lịch sử mua hàng
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="tab-content">
                  {loading ? (
                    <div className="text-center py-5">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <OrderList orders={orders} type={activeTab} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BuyingHistoryPage;
