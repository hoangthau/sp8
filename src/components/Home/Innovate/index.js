import React from 'react';

import './Innovate.scss';
import translate from './translate';

const Innovate = () => (
  <div className="innovate container">
    <div className="row">
      <div className="col-md-5 col-lg-4">
        <h2>{translate('title')}</h2>
      </div>
      <div className="col-md-7 col-lg-6">
        <p>{translate('desc1')}</p>
        <p>{translate('desc2')}</p>
        <p>{translate('desc3')}</p>
      </div>
    </div>
  </div>
);

export default Innovate;
