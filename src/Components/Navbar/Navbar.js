import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png'
import telegram from '../../images/telegram.png'; 

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className='font container'>
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand text-info font-weight-bolder" href="/">
          <a href=""></a>
          <img src={logo} alt=""/>
        </a>
        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09" >
          <ul class="navbar-nav m-auto ">
            <li class="nav-item active">
              <a class="nav-link" href="#">Defi <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">STO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">IEO/ICO</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Partners</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <img src={telegram} alt="" className='telegram mt-1 ml-md-3 ml-0' />
            </li>
            <li class="nav-item">
              <button className='nav-btn ml-md-5 ml-0 mt-md-2 mt-3'>team@x.10 agency</button>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;