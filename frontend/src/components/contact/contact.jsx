import React from "react";

export function Contact() {
  return (
    <div className="contact-area section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-xxl-4 col-xl-4 col-lg-6">
            <div className="contact-info-item text-center">
              <div className="contact-info-icon">
                <span>
                  <i className="fa-light fa-location-dot"></i>
                </span>
              </div>
              <div className="contact-info-content">
                <h4>Vị trí của chúng tôi</h4>
                <p>
                  <a href="#">48 Cao Thắng, Hải Châu, Đà Nẵng</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6">
            <div className="contact-info-item text-center">
              <div className="contact-info-icon">
                <span>
                  <i className="fa-light fa-envelope"></i>
                </span>
              </div>
              <div className="contact-info-content">
                <h4>Địa chỉ Email của chúng tôi</h4>
                <span>
                  <a href="mailto:contact@DOGRI.com">
                    nguyenvukhanh392@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-6">
            <div className="contact-info-item text-center">
              <div className="contact-info-icon">
                <span>
                  <i className="fa-thin fa-phone"></i>
                </span>
              </div>
              <div className="contact-info-content">
                <h4>Số điện thoại liên hệ</h4>
                <span>
                  <a href="tel:+84795605214">0795605214</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-wrapper pt-80">
          <div className="row gy-50">
            <div className="col-xxl-6 col-xl-6">
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.771503349087!2d108.21084937477174!3d16.077342784603314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184792140755%3A0xd4058cb259787dac!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIEvhu7kgdGh14bqtdCAtIMSQ4bqhaSBo4buNYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1766736847665!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6">
              <div className="contact-from">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact__from-input">
                        <input type="text" placeholder="Họ và Tên*" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact__from-input">
                        <input type="text" placeholder="Địa chỉ Email*" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact__from-input">
                        <input type="tel" placeholder="Số điện thoại" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact__from-input">
                        <input type="date" />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="contact__from-input">
                        <textarea
                          name="Message"
                          placeholder="Nội dung liên hệ"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="appointment__btn">
                        <button className="fill-btn" type="submit">
                          <span className="fill-btn-inner">
                            <span className="fill-btn-normal">
                              Gửi ngay
                              <i className="fa-regular fa-angle-right"></i>
                            </span>
                            <span className="fill-btn-hover">
                              Gửi ngay
                              <i className="fa-regular fa-angle-right"></i>
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
