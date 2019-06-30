import React from 'react';

import './Banner.scss';

const Banner = () => (
  <div className="banner container">
    <div className="row">
      <div className="col-md-6">
        <h1>The mono-working space</h1>
        <p>
          Enjoy amenities of professional working space and the focus of a
          private office, reminaged in a gorgeously designed workspace.
        </p>
        <a className="banner__book" href="/book">Book a tour</a>
        <a className="banner__pricing" href="#book-a-tour">See pricing</a>
      </div>
      <div className="col-md-6 banner__image">
        
      </div>
    </div>
  </div>
);

export default Banner;
