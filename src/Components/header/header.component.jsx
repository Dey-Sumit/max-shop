import React from 'react';
import './header.styles.scss';
import {
  Link
} from 'react-router-dom';
import {
  auth
} from '../../firebase/firebase.utils';
import {
  connect
} from 'react-redux';

const Header = ({
  currentUser
}) => (
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
      {
        currentUser?<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>:
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser

})

export default connect(mapStateToProps)(Header);