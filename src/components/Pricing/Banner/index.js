import React from 'react';

import './Banner.scss';
import translate from './translate';

const PricingBanner = () => (
  <div className="price-banner">
    <h1>{translate('title')}</h1>
    <p>{translate('desc')}</p>
  </div>
);

export default PricingBanner;

