import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../assets/crown.svg';

import './header.styles.css';

const Header = () => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        {/* eslint-disable-next-line */}
        <img src={Logo} className='logo'/>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
      </div>
    </div>
  );
  
export default Header;