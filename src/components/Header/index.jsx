import React from 'react';

import './Header.scss';

const Header = () => (
  <div className="header">
    <p className="header__logo">SP8</p>
    <div className="header__links">
      <button>Pricing</button>
      <button>Contact Us</button>
    </div>
  </div>
);

export default Header;
