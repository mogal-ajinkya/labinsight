// import React from 'react'
// import "./home.css"
// import Heroimage from '../../assets/images/Data extraction-pana.svg';
// const home = () => {
//   return (
//     // <section>
//     //         <nav>
//     //             { <div class="logo"> Rayen</div> }
//     //             <div class="menu-icon">|||</div>
//     //             <div class="menu-list js-menu-hide">
//     //                 <ul class="link">
//     //                     <li><a  >Home</a></li>
//     //                     <li><a  >About Us</a></li>
//     //                     <li><a  >Services</a></li>
//     //                     <li><a  >Contact</a></li>
//     //                 </ul>
//     //                 <div class="sign">
//     //                     <a href="/dashboard" class="login">Login</a>
//     //                     <a   class="sign-up">Sign Up</a>
//     //                 </div>
//     //             </div>
//     //         </nav>
//     //         <main>
//     //             <div class="text-area">
//     //                 <p class="desc">Introducing new technology</p>
//     //                 <h1 class="heading">Easy <span>Design</span> <br/><span>Easy</span> Website</h1>
//     //                 <p class="tag-ling">User interface is very important these days.</p>
//     //                 <div class="btns">
//     //                     <button class="btn-sub">Subscribe</button>
//     //                     <button class="btn-demo">Demo</button>
//     //                 </div> 
//     //             </div>
//     //             <div class="image-area">
//     //                 {/* <img src="OBJECTS.png" alt=""> */}
//     //             </div>
//     //         </main>
//     //     </section>



//     <section class="hero1">
        
//         {/* <!-- navbar start --> */}
//         <div class="navbar12">
//             <div class="logo12">
//                 {/* <img src="img/logo.png" alt=""> */}
                
//                 {/* <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/my-computer--v2.png" alt="my-computer--v2"/> */}
//                 <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/workstation.png" alt="workstation"/>
//                 <span>LabInsight</span>
            
//             </div>
//             <ul class="link12">
//                 <li className='liuhi'><a class="active12"  >Home</a></li>
//                 {/* <li><a  >Blog</a></li> */}
//                 {/* <li><a  >Gallery</a></li> */}
//                 <li  className='liuhi'><a  >About</a></li>
//                 <li  className='liuhi'><a  >Sign In</a></li>
//             </ul>
//         </div>
//         {/* <!-- navbar End --> */}

//         {/* <!-- main start  --> */}
//         <main className='abcde'>
        
//             <div class="textArea12">
//                 <h1 className='head'>LAB<br/> <span>INSIGHT.</span></h1>
//                 {/* <p className='para'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A system designed to track and manage various parameters within laboratory environments through real-time monitoring and data analysis "</p> */}
//                 <div className='btnsec'>
//                     <button class="btn12 btn12_dark">Sign In</button>
//                     {/* <button class="btn btn_light">Contact Us</button> */}
//                 </div>
//             </div>
// {/* 
//             <!-- textarea End  -->
//             <!-- imageArea start  --> */}
//             {/* <div class="imageArea"> */}
//                 <img className="heroimg12" src={Heroimage}/>
//                 {/*<img class="img img1" src="img/box ic.png" alt="">
//                 <img class="img img2" src="img/cercitBG.png" alt="">
//                 <img class="img img3" src="img/ctrl alt.png" alt="">
//                  <img class="img img4" src="img/enter.png" alt="">
//                 <img class="img img5" src="img/file.png" alt="">
//                 <img class="img img6" src="img/geair1.png" alt="">
//                 <img class="img img7" src="img/geair1.png" alt="">
//                 <img class="img img8" src="img/geair1.png" alt="">
//                 <img class="img img9" src="img/ware1.png" alt="">
//                 <img class="img img10" src="img/file down.png" alt=""> */}
//             {/* </div> */}
//             {/* <!-- imageArea end  --> */}

//         </main>
//         {/* <!-- main End  -->


//         <!-- footer start  --> */}
//         <div class="footer">
//             {/* <img src="img/cercit1.png" alt=""> */}
//             <div class="social12"><a  >FOLLOW US</a> SOCIAL MEDIA</div>
//         </div>
//     </section>


//   )
// }

// export default home


import React, { useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import './home.css'; // Import your CSS file here
import AnchorLink from "react-anchor-link-smooth-scroll";

const home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const closeNav = () => {
      setIsNavOpen(false);
    };

    window.addEventListener('click', closeNav);

    return () => {
      window.removeEventListener('click', closeNav);
    };
  }, []);

  return (
    <>
      <header className="header">
        <nav className='nav123'>
          <div className="nav__logo">
            <a href="#" className='a123'>
              {/* <img src="../../assets/images/assets/logo-color.png" alt="logo" className="logo-color" /> */}
              {/* <img src="assets/logo-white.png" alt="logo" className="logo-white" /> */}
            <img className="logo-color" width="40" height="40" src="https://img.icons8.com/ios-filled/50/a4a4d2/workstation.png" alt="workstation"/>

            </a>
          </div>
          <ul className={`nav__links ${isNavOpen ? 'open' : ''}`} id="nav-links">
            <li><NavLink to="#">Home</NavLink></li>
            <li><AnchorLink href='#features'>Features</AnchorLink></li>
            <li><NavLink to="/">Meet the team</NavLink></li>
            <li><NavLink to="/login">Log In</NavLink></li>
          </ul>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleNav}>
            <span><i className={isNavOpen ? 'ri-close-line' : 'ri-menu-line'}></i></span>
          </div>
        </nav>
        <div className="header__container">
          <div className="header__image">

          </div>
          <div className="header__content">
            <h1>LabInsight.</h1>
            {/* <h2>WORLDWIDE</h2> */}
            <p>
            "A system designed to track and manage various parameters within laboratory environments through real-time monitoring and data analysis "
            </p>
            <div className='btncontainer'>
              <Link to="/login" className="btn123">Log In</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="banner" id='features'>
        <div className="banner__card">
          <div className="banner__content">
            <h2>KEY</h2>
            <h3>Features</h3>
            {/* <p>Web Design Mastery</p> */}
          </div>
        </div>
        <div className="banner__card">
          <h4>Real-time Monitoring</h4>
          <p>
          Stay informed with real-time insights into your lab environment, ensuring proactive management and security.
          </p>
          {/* <a href="#">Read More</a> */}
        </div>
        <div className="banner__card">
          <h4>Comprehensive Data Collection</h4>
          <p>
          Collect detailed information on running processes, network activity, and connected devices across all lab PCs.
          </p>
          {/* <a href="#">Read More</a> */}
        </div>
        <div className="banner__card">
          <h4>Customizable Alerts</h4>
          <p>
          Set up customized alerts to receive notifications for critical events such as new secondary storage device connections.
          </p>
          {/* <a href="#">Read More</a> */}
        </div>
      </div>
    </>
  );
};

export default home;
