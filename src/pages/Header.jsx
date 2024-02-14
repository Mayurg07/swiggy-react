import React from 'react'
import '../styles/Header.css'
import logo from '../assets/images/Swiggy-logo.png'

const Header = () => {
  return (
    <header className='header'>
        <div className="navbar">           
                <div className="nav-left">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div class="location-div">
                        <span class="other">Other</span>
                        <span class="location">ESI Road, Laxmidas Nagar-1, Saiyed...</span>
                        <span class="arrow-down">
                            <i class="ri-arrow-down-s-line"></i>
                        </span>
                    </div>
                </div>
                <div className="nav-right">
                    <ul class="items">
                        <li>
                            <div class="nav-icon">
                                <span><i class="ri-search-line"></i></span>
                                <input type="text" name="search" placeholder="Search" />
                            </div>
                        </li>
                        <li>
                            <div class="nav-icon">
                                <span><i class="ri-discount-percent-line"></i></span>
                                <span>Offers</span>
                            </div>
                        </li>
                        <li>
                            <div class="nav-icon">
                                <span><i class="ri-album-line"></i></span>
                                <span>Help</span>
                            </div>
                        </li>
                        <li>
                            <div class="nav-icon">
                                <span><i class="ri-user-3-line"></i></span>
                                <span>Sign In</span>
                            </div>
                        </li>
                        <li>
                            <div class="nav-icon">
                                <span><i class="ri-restaurant-line"></i></span>
                                <span>Cart</span>
                            </div>
                        </li>
                    </ul>
                </div>           
        </div>
    </header>
  )
}

export default Header;
