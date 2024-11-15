import React, { useState } from 'react';
import '../../assets/css/header/header.css';
import '../../assets/css/header/header-responsive.css';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='site-header'>
      <div className='wrapper site-header__wrapper'>
        <a href='google.com' className='brand'>
          <img
            className='brand-logo'
            src={require('../../assets/images/logo/logo.png')}
            alt='Adventurist Logo'
          />
          <p>Adventurist</p>
        </a>
        <nav className='navbar' >
          <ul className={`${menuOpen ? 'navbar-open' : 'nav__wrapper'}`}>
            <li className='nav__item'>
              <a href='google.com'>Home</a>
            </li>
            <li className='nav__item'>
              <a href='google.com'>About Us</a>
            </li>
            <li className='nav__item'>
              <a href='google.com'>Services</a>
            </li>
            <li className='nav__item'>
              <a href='google.com'>Contact Us</a>
            </li>
            <li className='nav__item'>
              <a href='google.com'>Pages</a>
            </li>
          </ul>
        </nav>

        <button className=' nav__toggle' onClick={toggleMenu}>
          {menuOpen ? <FaBars /> : <FaBars />}
        </button>

        <button className='nav_book-now-button' aria-expanded='false' type='button'>
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;
