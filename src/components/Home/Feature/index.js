import React from 'react';

import './Feature.scss';
import translate from './translate';

const Feature = () => (
  <div className="features container">
    <div className="row features-focus item">
      <div className="col-md-6 features-focus__img">
        <img src="/assets/focus.jpg" alt="Amenities" />
      </div>
      <div className="col-md-6 focus-desc">
        <h2>{translate('focus')}</h2>
        <p>{translate('focusDesc1')}</p>

        <p>{translate('focusDesc2')}</p>

        <p>{translate('focusDesc3')}</p>
        <a href="#workspace">{translate('viewSpace')}</a>
      </div>
    </div>
    <div className="row features-amenity item">
      <div className="col-md-6 amenity-desc">
        <h2>{translate('amenities')}</h2>
        <p>{translate('amenitiesDesc1')}</p>

        <p>{translate('amenitiesDesc2')}</p>

        <p>{translate('amenitiesDesc3')}</p>
        <a href="#amenities">{translate('viewAmenities')}</a>
      </div>
      <div className="col-md-6 features-amenity__img">
        <img src="/assets/amenities.jpg" alt="Amenities" />
      </div>
    </div>
    <div className="row features-term item">
      <div className="col-md-6 features-term__img">
        <img src="/assets/terms.jpg" alt="Amenities" />
      </div>
      <div className="col-md-6 terms-desc">
        <h2>{translate('flexible')}</h2>
        <p>{translate('flexibleDesc1')}</p>

        <p>{translate('flexibleDesc2')}</p>

        <p>{translate('flexibleDesc3')}</p>
        <a href="/pricing">{translate('seePricing')}</a>
      </div>
    </div>
  </div>
);

export default Feature;
