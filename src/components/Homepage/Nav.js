import React, { useState } from "react";
import "./NewNav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    {/* <>
   
      <div className="head">
        <div className="container">
          <div className="title">
            <h1>Apna Restaurent</h1>
          </div>
          {
            !menuOpen?<div className="section">
            <ul>
              <li>
                {" "}
                <Link to="/">Home </Link>
              </li>
              <li>
                {" "}
                <Link to="/about">About </Link>
              </li>

              <li>
                <Link to="/product">Product </Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>:""
          }
        </div>
        <div className="hamburger">
          <i class="fa-sharp fa-solid fa-bars navbtn" onClick={toggleMenu}></i>
        </div>
      </div>
      </> */}

      <header class="header">
<Link to="/" Home  className="logo">Apna Restaurent</Link>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <div className="parenttttt">
    <div className="childd">

   
  <label class="menu-icon abhiiiii" for="menu-btn"><span class="navicon"></span></label>
  </div>
  </div>
  <ul class="menu">
    <li> <Link to="/">Home </Link></li>
    <li><Link to="/about">About </Link></li>
    <li> <Link to="/product">Product </Link></li>
    <li> <Link to="/career">Career</Link></li>
  </ul>
</header>
    </>
  );
};

export default Nav;
