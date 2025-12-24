import React from "react";
import logofooter from "../../assets/imgs/logo-light.png";
export  function Footer() {
    return (

<footer className="footer-bg">
      <div className="footer-area pt-100 pb-20">
         <div className="footer-style-4">
            <div className="container">
               <div className="footer-grid-3">
                  <div className="footer-widget-4">
                     <div className="footer-logo mb-35">
                        <a href="index.html"><img src={logofooter}
                              alt="image bnot found"/></a>
                     </div>
                     <p>It helps designers plan out where the content will sit, the content to be written and approved.
                     </p>
                     <div className="theme-social">
                        <a className="furniture-bg-hover" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a className="furniture-bg-hover" href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a className="furniture-bg-hover" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a className="furniture-bg-hover" href="#"><i className="fa-brands fa-instagram"></i></a>
                     </div>
                  </div>
                  <div className="footer-widget-4">
                     <div className="footer-widget-title">
                        <h4>Services</h4>
                     </div>
                     <div className="footer-link">
                        <ul>
                           <li><a href="error.html">Log In</a></li>
                           <li><a href="wishlist.html">Wishlist</a></li>
                           <li><a href="error.html">Return Policy</a></li>
                           <li><a href="error.html">Privacy policy</a></li>
                           <li><a href="faq.html">Shopping FAQs</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="footer-widget-4">
                     <div className="footer-widget-title">
                        <h4>Company</h4>
                     </div>
                     <div className="footer-link">
                        <ul>
                           <li><a href="index.html">Home</a></li>
                           <li><a href="about.html">About us </a></li>
                           <li><a href="about.html">Pages</a></li>
                           <li><a href="blog.html">Blog</a></li>
                           <li><a href="contact.html">Contact us</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="footer-widget footer-col-4">
                     <div className="footer-widget-title">
                        <h4>Contact</h4>
                     </div>
                     <div className="footer-info mb-35">
                        <p className="w-75">4517 Washington Ave. Manchester, Kentucky 39495</p>
                        <div className="footer-info-item d-flex align-items-start pb-15 pt-15">
                           <div className="footer-info-icon mr-20">
                              <span> <i className="fa-solid fa-location-dot furniture-icon"></i></span>
                           </div>
                           <div className="footer-info-text">
                              <a className="furniture-clr-hover" target="_blank"
                                 href="https://www.google.com/maps/place/Orville+St,+La+Presa,+CA+91977,+USA/@32.7092048,-117.0082772,17z/data=!3m1!4b1!4m5!3m4!1s0x80d9508a9aec8cd1:0x72d1ac1c9527b705!8m2!3d32.7092003!4d-117.0060885">711-2880
                                 Nulla St.</a>
                           </div>
                        </div>
                        <div className="footer-info-item d-flex align-items-start">
                           <div className="footer-info-icon mr-20">
                              <span><i className="fa-solid fa-phone furniture-icon"></i></span>
                           </div>
                           <div className="footer-info-text">
                              <a className="furniture-clr-hover" href="tel:012-345-6789">+964 742 44 763</a>
                              <p>Mon - Sat: 9 AM - 5 PM</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="container">
         <div className="footer-copyright-area b-t">
            <div className="footer-copyright-wrapper">
               <div className="footer-copyright-text">
                  <p className="mb-0">© All Copyright 2024 by <a target="_blank" className="furniture-clr-hover"
                        href="#">Addina</a></p>
               </div>
               <div className="footer-payment d-flex align-items-center gap-2">
                  <div className="footer-payment-item mb-0">
                     <div className="footer-payment-thumb">
                        <img src="assets/imgs/icons/payoneer.png" alt=""/>
                     </div>
                  </div>
                  <div className="footer-payment-item mb-0">
                     <div className="footer-payment-thumb">
                        <img src="assets/imgs/icons/maser.png" alt=""/>
                     </div>
                  </div>
                  <div className="footer-payment-item">
                     <div className="footer-payment-thumb">
                        <img src="assets/imgs/icons/paypal.png" alt=""/>
                     </div>
                  </div>
               </div>
               <div className="footer-conditions">
                  <ul>
                     <li><a className="furniture-clr-hover" href="#">Terms & Condition</a></li>
                     <li><a className="furniture-clr-hover" href="#">Privacy Policy</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </footer>
   );
   };
   export default Footer;