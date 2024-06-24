import React from "react";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-header"></div>
      <div className="footer-body">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Company</h3>
            <a href="#">Innovations</a>
            <a href="#">Business Services</a>
            <a href="#">Financial Services</a>
            <a href="#">Lejhro Recruiter</a>
            <a href="#">About</a>
            <a href="#">Blogs</a>
          </div>
          <div className="footer-section">
            <h3>Program</h3>
            <a href="#">Lejhro BootCamp</a>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <a href="#">Contact</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Statement</a>
          </div>
          <div className="footer-section">
            <h3>Contact With Us</h3>
            <div className="social-icon">
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copy">
        <p></p>
      <p className="copyright">© 2024 LEJHRO. All Rights Reserved.</p>
      <a className="up" href="#header"><i class="fa-sharp fa-solid fa-circle-up"></i></a>
      </div>
    </div>
  );
};

export default Footer;
