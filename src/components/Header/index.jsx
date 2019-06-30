import React from 'react';

import './Header.scss';

const Header = () => (
  <div className="header container">
    <span className="header__logo">SP8</span>
    <div className="header__links">
      <a className="header__pricing" href="/pricing">Pricing</a>
      <a className="header__book" href="#book-a-tour">Book a tour</a>
    </div>
  </div>
);

export default Header;
