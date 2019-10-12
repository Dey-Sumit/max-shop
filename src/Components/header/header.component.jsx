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
import Icon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
const Header = ({
  currentUser,
  hidden
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
    <Icon/>
    </div>
    {hidden?null:<CartDropdown/>}

  </div>
)


const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
})

/*
//destructure in advanced way
const mapStateToProps = ({user: {currentUser}}, {cart: {hidden}}) => ({
  currentUser,
  hidden
})
*/

export default connect(mapStateToProps)(Header);