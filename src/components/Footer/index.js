import React from 'react';

import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>About SP8</h3>
          <p>
            SP8 provides small teams with a platform to grow with a network of
            designed-to-focus working spaces.
          </p>
        </div>
        <div className="col-md-4">
          <h3>About Establishment</h3>
          <p>
            Establishment is the operator of SP8, Esta Eatery and Establishment
            XXV.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Contact Us</h3>
          <p>
            18Bis/16 Nguyen Thi Minh Khai, Da Kao, District 1, Ho Chi Minh City.
          </p>
          <p>hello@workinsp8.co</p>
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
