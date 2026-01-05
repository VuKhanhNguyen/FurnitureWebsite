import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import Offcanvas from "../commons/OffCanvas";
import orderService from "../../services/orderService";
import bg from "../../assets/imgs/breadcrumb-bg-furniture.jpg";

const OrderDetail = ({ showOffcanvas, setShowOffcanvas }) => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await orderService.getOrderById(id);
        if (res && res.data) {
          setOrder(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch order", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchOrder();
  }, [id]);

  const getTrackingSteps = (status, date) => {
    // Logic to generate steps based on status
    const steps = [
      {
        title: "Đặt hàng thành công",
        status: "pending",
        time: new Date(date).toLocaleString("vi-VN"),
      },
      { title: "Đang xử lý", status: "processing", time: "" },
      { title: "Đang giao hàng", status: "shipped", time: "" },
      { title: "Giao hàng thành công", status: "delivered", time: "" },
    ];

    const statusOrder = ["pending", "processing", "shipped", "delivered"];
    const currentIdx = statusOrder.indexOf(status);

    if (status === "cancelled") {
      return [
        {
          title: "Đặt hàng thành công",
          active: true,
          time: new Date(date).toLocaleString("vi-VN"),
        },
        { title: "Đã hủy", active: true, isFail: true, time: "" },
      ];
    }

    return steps.map((step, idx) => {
      return {
        ...step,
        active: idx <= currentIdx,
        time: idx <= currentIdx && idx === 0 ? step.time : "", // Only show time for first step for now, or real timestamps if backend provided them
      };
    });
  };

  const getProductImage = (item) => {
    const image = item?.product?.image;
    if (!image) return "/no-image.svg";

    // DB typically stores just the filename; files live under public/uploads/products
    if (
      typeof image === "string" &&
      (image.startsWith("http") || image.startsWith("/"))
    ) {
      return image;
    }
    return `/uploads/products/${image}`;
  };

  if (loading) return <div>Loading...</div>;
  if (!order)
    return (
      <div className="container py-5 text-center">Đơn hàng không tồn tại</div>
    );

  const trackingSteps = getTrackingSteps(order.status, order.order_date);

  return (
    <>
      <Header onOpenOffcanvas={() => setShowOffcanvas(true)} />
      <Offcanvas show={showOffcanvas} onClose={() => setShowOffcanvas(false)} />

      <main>
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
                          <span>
                            <Link to="/buying-history">Đơn hàng của tôi</Link>
                          </span>
                        </li>
                        <li>
                          <span>
                            <Link to={`/buying-history/${order.id}`}>
                              Chi tiết đơn hàng {order.id}
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="order-detail-area pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {/* Status Tracker */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-4">Trạng thái đơn hàng</h5>
                    <div className="position-relative">
                      <div
                        className="d-flex justify-content-between position-relative"
                        style={{ zIndex: 2 }}
                      >
                        {trackingSteps.map((step, index) => (
                          <div
                            key={index}
                            className="text-center"
                            style={{ flex: 1 }}
                          >
                            <div
                              className={`rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 ${
                                step.active
                                  ? step.isFail
                                    ? "bg-danger text-white"
                                    : "bg-primary text-white"
                                  : "bg-secondary text-white"
                              }`}
                              style={{
                                width: 40,
                                height: 40,
                                opacity: step.active ? 1 : 0.3,
                              }}
                            >
                              <i
                                className={`fas ${
                                  step.isFail ? "fa-times" : "fa-check"
                                }`}
                              ></i>
                            </div>
                            <div className="small fw-bold">{step.title}</div>
                            <div className="small text-muted">{step.time}</div>
                          </div>
                        ))}
                      </div>
                      <div
                        className="position-absolute top-0 start-0 w-100 bg-secondary"
                        style={{ height: 2, top: 20, zIndex: 1, opacity: 0.2 }}
                      />
                      <div
                        className="position-absolute top-0 start-0 bg-primary transition-width"
                        style={{
                          height: 2,
                          top: 20,
                          zIndex: 1,
                          width: `${
                            ((trackingSteps.filter((s) => s.active).length -
                              1) /
                              Math.max(trackingSteps.length - 1, 1)) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Order Info */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-3">Thông tin đơn hàng</h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <p className="mb-1 text-muted">Mã đơn hàng</p>
                        <p className="fw-bold fs-5">{order.id}</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="mb-1 text-muted">Ngày đặt hàng</p>
                        <p className="fw-bold">
                          {new Date(order.order_date).toLocaleString("vi-VN")}
                        </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="mb-1 text-muted">Người nhận</p>
                        <p className="fw-bold">{order.shipping_fullname}</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="mb-1 text-muted">Địa chỉ nhận hàng</p>
                        <p className="fw-bold">
                          {order.shipping_address}, {order.shipping_city}
                        </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="mb-1 text-muted">
                          Phương thức thanh toán
                        </p>
                        <p className="fw-bold text-uppercase">
                          {order.payment_method}
                        </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="mb-1 text-muted">Số điện thoại</p>
                        <p className="fw-bold">{order.shipping_phone}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-3">Sản phẩm</h5>
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="d-flex align-items-center mb-3 pb-3 border-bottom"
                      >
                        <div
                          style={{
                            width: "80px",
                            height: "80px",
                            overflow: "hidden",
                            borderRadius: "8px",
                            flexShrink: 0,
                          }}
                          className="me-3 bg-light"
                        >
                          <img
                            src={getProductImage(item)}
                            alt={item.product?.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            onError={(e) => {
                              e.currentTarget.src = "/no-image.svg";
                            }}
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">
                            {item.product?.name || "Sản phẩm không còn tồn tại"}
                          </h6>
                          <p className="mb-0 text-muted">
                            {item.price.toLocaleString("vi-VN")}đ x{" "}
                            {item.quantity}
                          </p>
                        </div>
                        <div className="fw-bold text-end">
                          {(item.price * item.quantity).toLocaleString("vi-VN")}
                          đ
                        </div>
                      </div>
                    ))}

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="text-muted">Tạm tính</span>
                      <span className="fw-bold">
                        {(order.subtotal_amount || 0).toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="text-muted">Phí vận chuyển</span>
                      <span className="fw-bold">
                        {(order.shipping_fee || 0).toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                    {order.discount_amount > 0 && (
                      <div className="d-flex justify-content-between align-items-center mt-2 text-success">
                        <span>Giảm giá</span>
                        <span className="fw-bold">
                          -
                          {(order.discount_amount || 0).toLocaleString("vi-VN")}
                          đ
                        </span>
                      </div>
                    )}
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mt-3 pt-2">
                      <span className="fw-bold fs-5">Tổng cộng</span>
                      <span className="fw-bold fs-4 text-primary">
                        {(order.total_amount || 0).toLocaleString("vi-VN")}đ
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Link
                    to="/buying-history"
                    className="btn btn-outline-dark me-2"
                  >
                    <i className="fas fa-arrow-left me-2"></i> Quay lại danh
                    sách
                  </Link>
                  <button className="btn btn-primary">
                    <i className="fas fa-headset me-2"></i> Liên hệ hỗ trợ
                  </button>
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

export default OrderDetail;
