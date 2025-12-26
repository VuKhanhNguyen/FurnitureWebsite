import React, { useEffect } from "react";
import detail1 from "../../assets/imgs/details-04.png";
import detail2 from "../../assets/imgs/details-05.png";
import detail3 from "../../assets/imgs/details-06.png";
export function Cart() {
  useEffect(() => {
    // Gắn lại sự kiện jQuery cho nút tăng/giảm số lượng
    if (window.$) {
      // Xóa sự kiện cũ để tránh gắn nhiều lần
      window.$(".cart-minus").off("click");
      window.$(".cart-plus").off("click");
      // Gắn lại sự kiện như trong main.js
      window.$(".cart-minus").click(function () {
        var $input = window.$(this).parent().find("input");
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
      });
      window.$(".cart-plus").click(function () {
        var $input = window.$(this).parent().find("input");
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
      });
    }
  });
  return (
    <div className="cart-area section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="table-content table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Ảnh</th>
                    <th className="cart-product-name">Sản phẩm</th>
                    <th className="product-price">Đơn giá</th>
                    <th className="product-quantity">Số lượng</th>
                    <th className="product-subtotal">Tổng</th>
                    <th className="product-remove">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="product-details.html">
                        <img src={detail1} alt="img" />
                      </a>
                    </td>
                    <td className="product-name">
                      <a href="product-details.html">Alexander Sofa</a>
                    </td>
                    <td className="product-price">
                      <span className="amount">24.000₫</span>
                    </td>
                    <td className="product-quantity text-center">
                      <div className="product-quantity mt-10 mb-10">
                        <div className="product-quantity-form">
                          <form action="#">
                            <button className="cart-minus">
                              <i className="far fa-minus"></i>
                            </button>
                            <input
                              className="cart-input"
                              type="text"
                              defaultValue="1"
                            />
                            <button className="cart-plus">
                              <i className="far fa-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">24.000₫</span>
                    </td>
                    <td className="product-remove">
                      <a href="#">
                        <i className="fa fa-times"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="product-details.html">
                        <img src={detail2} alt="img" />
                      </a>
                    </td>
                    <td className="product-name">
                      <a href="product-details.html">Curaskin Lipgel</a>
                    </td>
                    <td className="product-price">
                      <span className="amount">12.000₫</span>
                    </td>
                    <td className="product-quantity text-center">
                      <div className="product-quantity mt-10 mb-10">
                        <div className="product-quantity-form">
                          <form action="#">
                            <button className="cart-minus">
                              <i className="far fa-minus"></i>
                            </button>
                            <input
                              className="cart-input"
                              type="text"
                              defaultValue="1"
                            />
                            <button className="cart-plus">
                              <i className="far fa-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">12.000₫</span>
                    </td>
                    <td className="product-remove">
                      <a href="#">
                        <i className="fa fa-times"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="product-thumbnail">
                      <a href="product-details.html">
                        <img src={detail3} alt="img" />
                      </a>
                    </td>
                    <td className="product-name">
                      <a href="product-details.html">Leather Chair</a>
                    </td>
                    <td className="product-price">
                      <span className="amount">42.000₫</span>
                    </td>
                    <td className="product-quantity text-center">
                      <div className="product-quantity mt-10 mb-10">
                        <div className="product-quantity-form">
                          <form action="#">
                            <button className="cart-minus">
                              <i className="far fa-minus"></i>
                            </button>
                            <input
                              className="cart-input"
                              type="text"
                              defaultValue="1"
                            />
                            <button className="cart-plus">
                              <i className="far fa-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">42.000₫</span>
                    </td>
                    <td className="product-remove">
                      <a href="#">
                        <i className="fa fa-times"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="coupon-all">
                  <div className="coupon d-flex align-items-center">
                    <input
                      id="coupon_code"
                      className="input-text"
                      name="coupon_code"
                      placeholder="Nhập mã giảm giá"
                      type="text"
                    />
                    <button
                      onClick={() => window.location.reload()}
                      className="fill-btn"
                      type="submit"
                    >
                      <span className="fill-btn-inner">
                        <span className="fill-btn-normal">
                          nhập mã giảm giá
                        </span>
                        <span className="fill-btn-hover">nhập mã giảm giá</span>
                      </span>
                    </button>
                  </div>
                  <div className="coupon2">
                    <button
                      onClick={() => window.location.reload()}
                      className="fill-btn"
                      type="submit"
                    >
                      <span className="fill-btn-inner">
                        <span className="fill-btn-normal">
                          Cập nhật giỏ hàng
                        </span>
                        <span className="fill-btn-hover">
                          Cập nhật giỏ hàng
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 ml-auto">
                <div className="cart-page-total">
                  <h2>Tổng giỏ hàng</h2>
                  <ul className="mb-20">
                    <li>
                      Tổng phụ <span>78.000₫</span>
                    </li>
                    <li>
                      Tổng cộng <span>78.000₫</span>
                    </li>
                  </ul>
                  <a className="fill-btn" href="checkout.html">
                    <span className="fill-btn-inner">
                      <span className="fill-btn-normal">
                        Tiến hành thanh toán
                      </span>
                      <span className="fill-btn-hover">
                        Tiến hành thanh toán
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
