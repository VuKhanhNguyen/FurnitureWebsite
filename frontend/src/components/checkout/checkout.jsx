import React from "react";

export function Checkout() {
  return (
    <section class="checkout-area section-space">
      <div class="container">
        <form action="#">
          <div class="row">
            <div class="col-lg-6">
              <div class="checkbox-form">
                <h3 class="mb-15">Chi tiết hóa đơn</h3>
                <div class="row g-5">
                  <div class="col-md-12">
                    <div class="country-select">
                      <label>
                        Country <span class="required">*</span>
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
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>
                        Tên <span class="required">*</span>
                      </label>
                      <input type="text" placeholder="Tên" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>
                        Họ <span class="required">*</span>
                      </label>
                      <input type="text" placeholder="Họ" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <label>Tên công ty</label>
                      <input type="text" placeholder="Tên công ty" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <label>
                        Địa chỉ <span class="required">*</span>
                      </label>
                      <input type="text" placeholder="Địa chỉ" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <input
                        type="text"
                        placeholder="Căn hộ, phòng, đơn vị, v.v. (tùy chọn)"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <label>
                        Thành phố / Tỉnh <span class="required">*</span>
                      </label>
                      <input type="text" placeholder="Thành phố / Tỉnh" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>
                        Postcode / Zip <span class="required">*</span>
                      </label>
                      <input type="text" placeholder="Postcode / Zip" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="checkout-form-list">
                      <label>
                        Số điện thoại <span class="required">*</span>
                      </label>
                      <input type="text" placeholder="Số điện thoại" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list">
                      <label>
                        Địa chỉ Email <span class="required">*</span>
                      </label>
                      <input type="email" placeholder="Địa chỉ email" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="checkout-form-list create-acc d-flex align-content-center">
                      <input class="e-check-input" id="xbox" type="checkbox" />
                      <label class="mb-0">Tạo tài khoản?</label>
                    </div>
                    <div
                      id="cbox_info"
                      class="checkout-form-list create-account"
                    >
                      <p>
                        Tạo tài khoản bằng cách nhập thông tin bên dưới. Nếu bạn
                        là khách hàng quay lại, vui lòng đăng nhập ở đầu trang.
                      </p>
                      <label>
                        Mật khẩu tài khoản <span class="required">*</span>
                      </label>
                      <input type="password" placeholder="Mật khẩu" />
                    </div>
                  </div>
                </div>
                <div class="different-address">
                  <div class="ship-different-title">
                    <label>Gửi đến địa chỉ khác?</label>
                    <input
                      class="e-check-input"
                      id="ship-box"
                      type="checkbox"
                    />
                  </div>
                  <div id="ship-box-info">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="country-select">
                          <label>
                            Quốc gia <span class="required">*</span>
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
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>
                            Tên <span class="required">*</span>
                          </label>
                          <input type="text" placeholder="Tên" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>
                            Họ <span class="required">*</span>
                          </label>
                          <input type="text" placeholder="Họ" />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <label>Tên công ty</label>
                          <input type="text" placeholder="Tên công ty" />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <label>
                            Địa chỉ <span class="required">*</span>
                          </label>
                          <input type="text" placeholder="Địa chỉ" />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <input
                            type="text"
                            placeholder="Căn hộ, phòng, đơn vị, v.v. (tùy chọn)"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="checkout-form-list">
                          <label>
                            Thị trấn / Thành phố <span class="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Thị trấn / Thành phố"
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>
                            Postcode / Zip <span class="required">*</span>
                          </label>
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>
                            Điện thoại <span class="required">*</span>
                          </label>
                          <input type="text" placeholder="Điện thoại" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="checkout-form-list">
                          <label>
                            Đia chỉ Email <span class="required">*</span>
                          </label>
                          <input type="email" placeholder="Đia chỉ Email" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="order-notes">
                    <div class="checkout-form-list">
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
            <div class="col-lg-6">
              <div class="your-order">
                <h3>Đơn hàng của bạn</h3>
                <div class="your-order-table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th class="product-name">Sản phẩm</th>
                        <th class="product-total">Tổng cộng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="cart_item">
                        <td class="product-name">
                          Alexander Sofa
                          <strong class="product-quantity"> × 1</strong>
                        </td>
                        <td class="product-total">
                          <span class="amount">24.000₫</span>
                        </td>
                      </tr>
                      <tr class="cart_item">
                        <td class="product-name">
                          Curaskin Lipgel
                          <strong class="product-quantity"> × 1</strong>
                        </td>
                        <td class="product-total">
                          <span class="amount">12.000₫</span>
                        </td>
                      </tr>
                      <tr class="cart_item">
                        <td class="product-name">
                          Leather Chair
                          <strong class="product-quantity"> × 1</strong>
                        </td>
                        <td class="product-total">
                          <span class="amount">22.000₫</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr class="cart-subtotal">
                        <th>Tổng phụ giỏ hàng</th>
                        <td>
                          <span class="amount">58.000₫</span>
                        </td>
                      </tr>
                      <tr class="shipping">
                        <th>Phí vận chuyển</th>
                        <td>
                          <ul>
                            <li>
                              <input type="radio" />
                              <label>
                                Phí cố định: <span class="amount">7.000₫</span>
                              </label>
                            </li>
                            <li>
                              <input type="radio" />
                              <label>Miễn phí vận chuyển:</label>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr class="order-total">
                        <th>Tổng đơn hàng</th>
                        <td>
                          <strong>
                            <span class="amount">85.000₫</span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div class="payment-method">
                  <div class="accordion" id="checkoutAccordion">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="checkoutOne">
                        <button
                          class="accordion-button"
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
                        class="accordion-collapse collapse show"
                        aria-labelledby="checkoutOne"
                        data-bs-parent="#checkoutAccordion"
                      >
                        <div class="accordion-body">
                          Vui lòng chuyển khoản trực tiếp vào tài khoản ngân
                          hàng của chúng tôi. Vui lòng sử dụng ID đơn hàng của
                          bạn làm tham chiếu thanh toán. Đơn hàng của bạn sẽ
                          không được gửi cho đến khi tiền đã được xác nhận trong
                          tài khoản của chúng tôi.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="paymentTwo">
                        <button
                          class="accordion-button collapsed"
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
                        class="accordion-collapse collapse"
                        aria-labelledby="paymentTwo"
                        data-bs-parent="#checkoutAccordion"
                      >
                        <div class="accordion-body">
                          Vui lòng gửi séc của bạn đến Tên cửa hàng, Đường cửa
                          hàng, Thị trấn cửa hàng, Bang / Hạt cửa hàng, Mã bưu
                          điện cửa hàng.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="paypalThree">
                        <button
                          class="accordion-button collapsed"
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
                        class="accordion-collapse collapse"
                        aria-labelledby="paypalThree"
                        data-bs-parent="#checkoutAccordion"
                      >
                        <div class="accordion-body">
                          Thanh toán thông qua PayPal; bạn có thể thanh toán
                          bằng thẻ tín dụng nếu bạn không có tài khoản PayPal.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="order-button-payment mt-20">
                    <button class="fill-btn" type="submit">
                      <span class="fill-btn-inner">
                        <span class="fill-btn-normal">Đặt hàng</span>
                        <span class="fill-btn-hover">Đặt hàng</span>
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
