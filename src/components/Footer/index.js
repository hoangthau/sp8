import React from 'react';

import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <p>About SP8</p>
          <p>
            SP8 provides small teams with a platform to grow with a network of
            designed-to-focus working spaces.
          </p>
        </div>
        <div className="col-md-3">
          <p>About Establishment</p>
          <p>
            Establishment is the operator of SP8, Esta Eatery and Establishment
            XXV.
          </p>
        </div>
        <div className="col-md-3">
          <p>Contact Us</p>
          <p>
            18Bis/16 Nguyen Thi Minh Khai, Da Kao, District 1, Ho Chi Minh City.
          </p>
          <p>matt@workinsp8.co</p>
          <p>
            (+84) 899 898 363 (Matt) <br />
            (+84) 938 945 800 (Ryan)
          </p>
        </div>
      </div>
      <p>© 2019 SP8 by Establishment</p>
    </div>
  </div>
);

export default Footer;
