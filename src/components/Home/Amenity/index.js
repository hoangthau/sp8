import React from 'react';

import './Amenity.scss';

const Amenity = () => (
  <div className="container amenity">
    <h2>The amenities you need</h2>
    <p>You focus on growing your business, let us take care of the rest.</p>
    <div className="row">
      <div className="col-md-4">
        <div className="amenity__space-img" />
        <div className="amenity__desc">
          <h3>Space</h3>
          <ul>
            <li>High-speed Wi-Fi</li>
            <li>Conference rooms</li>
            <li>Bio-sensor locks</li>
            <li>Private phone booths</li>
            <li>Private balcony</li>
            <li>Pantry area</li>
            <li>Common areas and lounges</li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="amenity__services-img" />
        <div className="amenity__desc">
          <h3>Services</h3>
          <ul>
            <li>Front-desk and guest reception</li>
            <li>Printing station</li>
            <li>Mail and package handling</li>
            <li>Daily cleaning services</li>
            <li>Professional management</li>
            <li>Streamlined billing process</li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="amenity__perks-img" />
        <div className="amenity__desc">
          <h3>Perks</h3>
          <ul>
            <li>Esta Eatery</li>
            <li>Prime location</li>
            <li>Coffee and tea</li>
            <li>Freshwater</li>
            <li>Events and conferences</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Amenity;
