import React,{useState} from 'react'

const Navbar = () => {
  const [showSidebar,setShowSidebar] = useState(false)

  return (
    <>
    <div className="home-page">
      <div class="header">
        <div className="top-header">
          <div>
            <a href="#"><img src="https://www.lejhro.com/lejhro_logo_white.png" alt="logo" /></a>
          </div>
          <div className="menu">
              <a href="#">Innovation</a>
              <a href="#">Business Service</a>
              <a href="#">Financial Services</a>
              <a href="#">BootCamp</a>
          </div>
          <div class="hamburger">
            <i id="hamburger" onClick={()=>setShowSidebar(true)} class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

        <h2 className='blogs'>Blogs</h2>
    </div>


    <div class={`${showSidebar? 'open':'close'} sidebar`}>
      <div class="logo">
      <a href="#"><img src="https://www.lejhro.com/lejhro_logo_blue.png" alt="logo" /></a>
      <i id="hamburger" onClick={()=>setShowSidebar(false)} class="fa-solid fa-xmark"></i>
      </div>
      <a href="#"><span>Innovation</span></a>
      <a href="#"><span>BootCamp</span></a>
      <a href="#"><span>Business Services</span></a>
      <a href="#"><span>Financial Services</span></a>
      <a href="#"><span>About</span></a>
      <a href="#"><span>Contact Us</span></a>
      <a href="#"><span>Blog</span></a>
      <div className="social-icons">
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
    </div>

    </>
  )
}

export default Navbar