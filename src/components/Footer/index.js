import React from 'react';

import './Footer.scss';
import translate from './translate';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>{translate('aboutSP8')}</h3>
          <p>{translate('aboutSP8Desc')}</p>
        </div>
        <div className="col-md-4">
          <h3>{translate('establishment')}</h3>
          <p>{translate('establishmentDesc')}</p>
        </div>
        <div className="col-md-4">
          <h3> {translate('contact')}</h3>
          <p>{translate('contactDesc')}</p>
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
