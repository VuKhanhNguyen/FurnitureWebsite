import React from "react";

export function ProductTab() {
  return (
    <div className="product__details-additional-info section-space-medium-top">
      <div className="row">
        <div className="col-xxl-3 col-xl-4 col-lg-4">
          <div className="product__details-more-tab mr-15">
            <nav>
              <div
                className="nav nav-tabs flex-column"
                id="productmoretab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-description-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-description"
                  type="button"
                  role="tab"
                  aria-controls="nav-description"
                  aria-selected="true"
                >
                  Mô tả sản phẩm
                </button>
                <button
                  className="nav-link"
                  id="nav-additional-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-additional"
                  type="button"
                  role="tab"
                  aria-controls="nav-additional"
                  aria-selected="false"
                >
                  Thông tin bổ sung
                </button>
                <button
                  className="nav-link"
                  id="nav-review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-review"
                  type="button"
                  role="tab"
                  aria-controls="nav-review"
                  aria-selected="false"
                >
                  Đánh giá (3)
                </button>
              </div>
            </nav>
          </div>
        </div>
        <div className="col-xxl-9 col-xl-8 col-lg-8">
          <div className="product__details-more-tab-content">
            <div className="tab-content" id="productmorecontent">
              <div
                className="tab-pane fade show active"
                id="nav-description"
                role="tabpanel"
                aria-labelledby="nav-description-tab"
              >
                <div className="product__details-des">
                  <p>
                    In marketing a product is an object or system made available
                    for consumer use it is anything that can be offered to a
                    market to the desire or need of a retailing, products are
                    often referred to as merchandise, and in manufacturing,
                    products are bought as materials and then sold as finished
                    goods. A service regarded to as a type of product.
                    Commodities are usually raw materials metals and
                    agricultural products, but a commodity can also be anything
                    wide the open market. In project management, the formal
                    definition of the project deliverables
                  </p>
                  <p>
                    A product can be classNameified as tangible or intangible. A
                    tangible product is a physical object that can be perceived
                    by touch building, vehicle, gadget, An intangible product is
                    a product that can only be perceived indirectly such as an
                    insurance policy. can be broadly classNameified under
                    intangible be durable or non durable. A product line is "a
                    group of products that are closely either because they
                    function in a similar manner, are sold to the same
                    customergroups.
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-additional"
                role="tabpanel"
                aria-labelledby="nav-additional-tab"
              >
                <div className="product__details-info">
                  <ul>
                    <li>
                      <h4>Weight</h4>
                      <span>2 lbs</span>
                    </li>
                    <li>
                      <h4>Dimensions</h4>
                      <span>12 × 16 × 19 in</span>
                    </li>
                    <li>
                      <h4>Product</h4>
                      <span>Purchase this product on rag-bone.com</span>
                    </li>
                    <li>
                      <h4>Color</h4>
                      <span>Gray, Black</span>
                    </li>
                    <li>
                      <h4>Size</h4>
                      <span>S, M, L, XL</span>
                    </li>
                    <li>
                      <h4>Model</h4>
                      <span>Model </span>
                    </li>
                    <li>
                      <h4>Shipping</h4>
                      <span>Standard shipping: $5,95</span>
                    </li>
                    <li>
                      <h4>Care Info</h4>
                      <span>Machine Wash up to 40ºC/86ºF Gentle Cycle</span>
                    </li>
                    <li>
                      <h4>Brand</h4>
                      <span>Kazen</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-review"
                role="tabpanel"
                aria-labelledby="nav-review-tab"
              >
                <div className="product__details-review">
                  <h3 className="comments-title">
                    03 reviews for “Wide Cotton Tunic extreme hammer”
                  </h3>
                  <div className="latest-comments mb-50">
                    <ul>
                      <li>
                        <div className="comments-box d-flex">
                          <div className="comments-avatar mr-10">
                            <img src="assets/imgs/user/user-01.png" alt="" />
                          </div>
                          <div className="comments-text">
                            <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                              <div className="avatar-name">
                                <h5>Siarhei Dzenisenka</h5>
                                <div className="comments-date">
                                  <span>March 27, 2018 9:51 am</span>
                                </div>
                              </div>
                              <div className="user-rating">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fal fa-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>
                              This is cardigan is a comfortable warm classNameic
                              piece. Great to layer with a light top and you can
                              dress up or down given the jewel buttons. I’m 5’8”
                              128lbs a 34A and the Small fit fine.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="comments-box d-flex">
                          <div className="comments-avatar mr-10">
                            <img src="assets/imgs/user/user-02.png" alt="" />
                          </div>
                          <div className="comments-text">
                            <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                              <div className="avatar-name">
                                <h5>Siarhei Dzenisenka</h5>
                                <div className="comments-date">
                                  <span>March 27, 2018 9:51 am</span>
                                </div>
                              </div>
                              <div className="user-rating">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>
                              I bought this beautiful pale gray cashmere sweater
                              for my daughter-in-law for her birthday. She loves
                              it and can wear it with almost anything!
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="comments-box d-flex">
                          <div className="comments-avatar mr-10">
                            <img src="assets/imgs/user/user-03.png" alt="" />
                          </div>
                          <div className="comments-text">
                            <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                              <div className="avatar-name">
                                <h5>Siarhei Dzenisenka</h5>
                                <div className="comments-date">
                                  <span>March 27, 2018 9:51 am</span>
                                </div>
                              </div>
                              <div className="user-rating">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fal fa-star"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p>
                              Amazing club. Sure the secruity is very tight but
                              actually made me and my friends feel secure. You
                              just have to go along with the secruity. Bar staff
                              and cloakroom staff really friendly. Coming out at
                              7am into bright London sunshine in Smithfields is
                              an amazing London experience
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="product__details-comment section-space-medium-bottom">
                    <div className="comment-title mb-20">
                      <h3>Add a review</h3>
                      <p>
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                    </div>
                    <div className="comment-rating mb-20">
                      <span>Overall ratings</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fal fa-star"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="comment-input-box">
                      <form action="#">
                        <div className="row">
                          <div className="col-xxl-12">
                            <div className="comment-input">
                              <textarea placeholder="Your review"></textarea>
                            </div>
                          </div>
                          <div className="col-xxl-6">
                            <div className="comment-input">
                              <input type="text" placeholder="Your Name*" />
                            </div>
                          </div>
                          <div className="col-xxl-6">
                            <div className="comment-input">
                              <input type="email" placeholder="Your Email*" />
                            </div>
                          </div>
                          <div className="col-xxl-12">
                            <div className="comment-agree d-flex align-items-center mb-25">
                              <input
                                className="z-check-input"
                                type="checkbox"
                                id="z-agree"
                              />
                              <label className="z-check-label" for="z-agree">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </label>
                            </div>
                          </div>
                          <div className="col-xxl-12">
                            <div className="comment-submit">
                              <button type="submit" className="fill-btn">
                                <span className="fill-btn-inner">
                                  <span className="fill-btn-normal">
                                    submit now
                                  </span>
                                  <span className="fill-btn-hover">
                                    submit now
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
        </div>
      </div>
    </div>
  );
}
export default ProductTab;
