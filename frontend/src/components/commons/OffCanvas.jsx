import React, { useState } from "react";
import logo from "../../assets/imgs/logo-light.png";

function Offcanvas({ show, onClose }) {
  // Giả lập trạng thái đăng nhập, bạn có thể thay bằng context hoặc redux
  const [isLoggedIn] = useState(false);

  // State cho form đăng nhập
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
    alert("Đăng nhập chưa được tích hợp!");
  };

  return (
    <>
      <div
        className={`fix${show ? " info-open" : ""}`}
        style={{ display: show ? "block" : "none", zIndex: 9999 }}
      >
        <div className={`offcanvas__info${show ? " info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="/">
                    <img src={logo} alt="logo not found" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button onClick={onClose}>
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
              {!isLoggedIn ? (
                <div className="offcanvas__login-link">
                  <a href="/login" className="btn btn-outline-primary w-100">
                    Đăng nhập
                  </a>
                </div>
              ) : (
                <div className="offcanvas__user">
                  {/* Nội dung khi đã đăng nhập */}
                  <p>Xin chào, User!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div
        className="offcanvas__overlay"
        style={{ display: show ? "block" : "none", zIndex: 9998 }}
        onClick={onClose}
      ></div>
      <div
        className="offcanvas__overlay-white"
        style={{ display: show ? "block" : "none", zIndex: 9997 }}
        onClick={onClose}
      ></div>
    </>
  );
}

export default Offcanvas;
