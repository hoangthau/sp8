import React from 'react';

import logo from './sp8.svg';
import './Header.scss';

const Header = () => (
  <div className="header container">
    <img src={logo} width={59} height={24} alt="logo" />
    <div className="header__links">
      <a className="header__pricing" href="/pricing">Pricing</a>
      <a className="header__book" href="#book-a-tour">Book a tour</a>
    </div>
  </div>
);

export default Header;
