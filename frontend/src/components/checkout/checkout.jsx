import React from "react";

export function Checkout() {
  return (
    <section className="checkout-area section-space">
      <div className="container">
        <form action="#">
          <div className="row">
            <div className="col-lg-6">
              <div className="checkbox-form">
                <h3 className="mb-15">Chi tiết hóa đơn</h3>
                <div className="row g-5">
                  <div className="col-md-12">
                    <div className="country-select">
                      <label>
                        Country <span className="required">*</span>
                      </label>
                      <select>
                        <option value="volvo">United States</option>
                        <option value="saab">Algeria</option>
                        <option value="mercedes">Afghanistan</option>
                        <option value="audi">Ghana</option>
                        <option value="audi2">Albania</option>
                        <option value="audi3">Bahrain</option>
                        <option value="audi4">Colombia</option>
                        <option value="audi5">Dominican Republic</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Tên <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Tên" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Họ <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Họ" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>Tên công ty</label>
                      <input type="text" placeholder="Tên công ty" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>
                        Địa chỉ <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Địa chỉ" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <input
                        type="text"
                        placeholder="Căn hộ, phòng, đơn vị, v.v. (tùy chọn)"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>
                        Thành phố / Tỉnh <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Thành phố / Tỉnh" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Postcode / Zip <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Postcode / Zip" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="checkout-form-list">
                      <label>
                        Số điện thoại <span className="required">*</span>
                      </label>
                      <input type="text" placeholder="Số điện thoại" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list">
                      <label>
                        Địa chỉ Email <span className="required">*</span>
                      </label>
                      <input type="email" placeholder="Địa chỉ email" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkout-form-list create-acc d-flex align-content-center">
                      <input
                        className="e-check-input"
                        id="xbox"
                        type="checkbox"
                      />
                      <label className="mb-0">Tạo tài khoản?</label>
                    </div>
                    <div
                      id="cbox_info"
                      className="checkout-form-list create-account"
                    >
                      <p>
                        Tạo tài khoản bằng cách nhập thông tin bên dưới. Nếu bạn
                        là khách hàng quay lại, vui lòng đăng nhập ở đầu trang.
                      </p>
                      <label>
                        Mật khẩu tài khoản <span className="required">*</span>
                      </label>
                      <input type="password" placeholder="Mật khẩu" />
                    </div>
                  </div>
                </div>
                <div className="different-address">
                  <div className="ship-different-title">
                    <label>Gửi đến địa chỉ khác?</label>
                    <input
                      className="e-check-input"
                      id="ship-box"
                      type="checkbox"
                    />
                  </div>
                  <div id="ship-box-info">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="country-select">
                          <label>
                            Quốc gia <span className="required">*</span>
                          </label>
                          <select>
                            <option value="volvo">Bangladesh</option>
                            <option value="saab">Algeria</option>
                            <option value="mercedes">Afghanistan</option>
                            <option value="audi">Ghana</option>
                            <option value="audi2">Albania</option>
                            <option value="audi3">Bahrain</option>
                            <option value="audi4">Colombia</option>
                            <option value="audi5">Dominican Republic</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Tên <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Tên" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Họ <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Họ" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>Tên công ty</label>
                          <input type="text" placeholder="Tên công ty" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Địa chỉ <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Địa chỉ" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <input
                            type="text"
                            placeholder="Căn hộ, phòng, đơn vị, v.v. (tùy chọn)"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Thị trấn / Thành phố{" "}
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Thị trấn / Thành phố"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Điện thoại <span className="required">*</span>
                          </label>
                          <input type="text" placeholder="Điện thoại" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Đia chỉ Email <span className="required">*</span>
                          </label>
                          <input type="email" placeholder="Đia chỉ Email" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-notes">
                    <div className="checkout-form-list">
                      <label>Ghi chú đơn hàng</label>
                      <textarea
                        id="checkout-mess"
                        cols="30"
                        rows="10"
                        placeholder="Ghi chú về đơn hàng của bạn, ví dụ: ghi chú đặc biệt cho việc giao hàng."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="your-order">
                <h3>Đơn hàng của bạn</h3>
                <div className="your-order-table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-name">Sản phẩm</th>
                        <th className="product-total">Tổng cộng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart_item">
                        <td className="product-name">
                          Alexander Sofa
                          <strong className="product-quantity"> × 1</strong>
                        </td>
                        <td className="product-total">
                          <span className="amount">24.000₫</span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          Curaskin Lipgel
                          <strong className="product-quantity"> × 1</strong>
                        </td>
                        <td className="product-total">
                          <span className="amount">12.000₫</span>
                        </td>
                      </tr>
                      <tr className="cart_item">
                        <td className="product-name">
                          Leather Chair
                          <strong className="product-quantity"> × 1</strong>
                        </td>
                        <td className="product-total">
                          <span className="amount">22.000₫</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th>Tổng phụ giỏ hàng</th>
                        <td>
                          <span className="amount">58.000₫</span>
                        </td>
                      </tr>
                      <tr className="shipping">
                        <th>Phí vận chuyển</th>
                        <td>
                          <ul>
                            <li>
                              <input type="radio" />
                              <label>
                                Phí cố định:{" "}
                                <span className="amount">7.000₫</span>
                              </label>
                            </li>
                            <li>
                              <input type="radio" />
                              <label>Miễn phí vận chuyển:</label>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Tổng đơn hàng</th>
                        <td>
                          <strong>
                            <span className="amount">85.000₫</span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="payment-method">
                  <div className="accordion" id="checkoutAccordion">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="checkoutOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#bankOne"
                          aria-expanded="true"
                          aria-controls="bankOne"
                        >
                          Chuyển khoản ngân hàng trực tiếp
                        </button>
                      </h2>
                      <div
                        id="bankOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="checkoutOne"
                        data-bs-parent="#checkoutAccordion"
                      >
                        <div className="accordion-body">
                          Vui lòng chuyển khoản trực tiếp vào tài khoản ngân
                          hàng của chúng tôi. Vui lòng sử dụng ID đơn hàng của
                          bạn làm tham chiếu thanh toán. Đơn hàng của bạn sẽ
                          không được gửi cho đến khi tiền đã được xác nhận trong
                          tài khoản của chúng tôi.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="paymentTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#payment"
                          aria-expanded="false"
                          aria-controls="payment"
                        >
                          Thanh toán bằng thẻ tín dụng / Ghi nợ
                        </button>
                      </h2>
                      <div
                        id="payment"
                        className="accordion-collapse collapse"
                        aria-labelledby="paymentTwo"
                        data-bs-parent="#checkoutAccordion"
                      >
                        <div className="accordion-body">
                          Vui lòng gửi séc của bạn đến Tên cửa hàng, Đường cửa
                          hàng, Thị trấn cửa hàng, Bang / Hạt cửa hàng, Mã bưu
                          điện cửa hàng.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="paypalThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#paypal"
                          aria-expanded="false"
                          aria-controls="paypal"
                        >
                          PayPal
                        </button>
                      </h2>
                      <div
                        id="paypal"
                        className="accordion-collapse collapse"
                        aria-labelledby="paypalThree"
                        data-bs-parent="#checkoutAccordion"
                      >
                        <div className="accordion-body">
                          Thanh toán thông qua PayPal; bạn có thể thanh toán
                          bằng thẻ tín dụng nếu bạn không có tài khoản PayPal.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-button-payment mt-20">
                    <button className="fill-btn" type="submit">
                      <span className="fill-btn-inner">
                        <span className="fill-btn-normal">Đặt hàng</span>
                        <span className="fill-btn-hover">Đặt hàng</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Checkout;
