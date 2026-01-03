import React, { useState, useEffect } from "react";
import logo from "../../assets/imgs/logo-light.png";
import Login from "../login_register/login";
import { useNavigate } from "react-router-dom";
import wishlistService from "../../services/wishlistService";

function Offcanvas({ show, onClose }) {
  const navigate = useNavigate();

  // Kiểm tra trạng thái đăng nhập từ localStorage
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  }, [show]);

  // State cho form đăng nhập
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Bạn có chắc chắn muốn đăng xuất không?"
    );
    if (confirmLogout) {
      localStorage.removeItem("user");
      wishlistService.clearLocalWishlist();
      wishlistService.notifyAuthChanged();
      if (typeof window !== "undefined" && window?.dispatchEvent) {
        window.dispatchEvent(new Event("cart:updated"));
      }
      setUser(null);
      navigate("/");
      if (onClose) onClose();
    }
    // Nếu chọn Cancel thì không làm gì
  };

  const handleProfile = () => {
    navigate("/profile");
    if (onClose) onClose();
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
              {!user ? (
                <div className="offcanvas__login-link">
                  <a
                    href="#"
                    onClick={handleLogin}
                    className="btn btn-primary w-100 py-3 fs-3"
                  >
                    Đăng nhập
                  </a>
                </div>
              ) : (
                <div
                  className="offcanvas__user"
                  style={{ textAlign: "center" }}
                >
                  <p>
                    Xin chào, <b>{user.username}</b>!
                  </p>
                  <button
                    className="btn btn-primary w-100 py-3 fs-3 mb-10"
                    onClick={handleProfile}
                  >
                    Xem profile
                  </button>
                  <button
                    className="btn btn-danger w-100 py-3 fs-3"
                    onClick={handleLogout}
                  >
                    Đăng xuất
                  </button>
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
