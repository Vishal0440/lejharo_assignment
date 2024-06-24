import React, { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="home-page">
        <div className="header" id="header">
          <div className="top-header">
            <a href="#">
              <img
                src="https://www.lejhro.com/lejhro_logo_white.png"
                width="30%"
                alt="logo"
              />
            </a>
            <div className="menu">
              <a href="#">Innovation</a>
              <a href="#">Business Service</a>
              <a href="#">Financial Services</a>
              <a href="#">BootCamp</a>
            </div>
            <a className="menubar" href="#">
              <i
                onClick={() => setShowSidebar(true)}
                class="fa-solid fa-bars"
              ></i>
            </a>
          </div>
        </div>
        <h2 className="blogs">Blogs</h2>
      </div>

      <div className={`${showSidebar ? "open" : "close"} sidebar`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <a href="#">
              <img
                src="https://www.lejhro.com/lejhro_logo_blue.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="sidebar-close">
            <a href="#">
              <i onClick={() => setShowSidebar(false)}
                className="fa-solid fa-xmark"
              ></i>
            </a>
          </div>
        </div>
        <div className="sidebar-menu">
          <a href="#">Innovation</a>
          <a href="#">BootCamp</a>
          <a href="#">Business Services</a>
          <a href="#">Financial Services</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
        </div>
        <div className="sidebar-social-icon">
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
