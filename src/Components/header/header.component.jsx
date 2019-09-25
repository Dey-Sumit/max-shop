import React from 'react';
import './header.styles.scss';
import {
  Link
} from 'react-router-dom';
const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      Sumax
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      <Link className='option' to='/shop'>
        ABOUT
      </Link>
    </div>
  </div>
)
export default Header;