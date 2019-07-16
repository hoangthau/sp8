import React from 'react';

import './Amenity.scss';
import translate from './translate';

const Amenity = () => (
  <div id="amenities" className="amenity">
    <div className="container">
      <h2>{translate('title')}</h2>
      <p>{translate('desc')}</p>
      <div className="row">
        <div className="col-md-4">
          <div className="amenity__space-img" />
          <div className="amenity__desc">
            <h3>{translate('space')}</h3>
            <ul>
              <li>{translate('spaceItem1')}</li>
              <li>{translate('spaceItem2')}</li>
              <li>{translate('spaceItem3')}</li>
              <li>{translate('spaceItem4')}</li>
              <li>{translate('spaceItem5')}</li>
              <li>{translate('spaceItem6')}</li>
              <li>{translate('spaceItem7')}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="amenity__services-img" />
          <div className="amenity__desc">
            <h3>{translate('services')}</h3>
            <ul>
              <li>{translate('servicesItem1')}</li>
              <li>{translate('servicesItem2')}</li>
              <li>{translate('servicesItem3')}</li>
              <li>{translate('servicesItem4')}</li>
              <li>{translate('servicesItem5')}</li>
              <li>{translate('servicesItem6')}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="amenity__perks-img" />
          <div className="amenity__desc">
            <h3>{translate('perks')}</h3>
            <ul>
              <li>{translate('perksItem1')}</li>
              <li>{translate('perksItem2')}</li>
              <li>{translate('perksItem3')}</li>
              <li>{translate('perksItem4')}</li>
              <li>{translate('perksItem5')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Amenity;
