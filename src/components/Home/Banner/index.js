import React from 'react';
import BannerImg from './banner.jpg';

import './Banner.scss';

const Banner = () => (
  <div className="banner container">
    <div className="row">
      <div className="col-md-6 left">
        <div>
          <h1>The mono-working space</h1>
          <p>
            Enjoy all the amenities of a professional working space with the
            focus of a private office — reminaged in a gorgeously designed
            workspace.
          </p>
          <a className="banner__book" href="/book">
            Book a tour
          </a>
          <a className="banner__pricing" href="#book-a-tour">
            See pricing
          </a>
        </div>
      </div>
      <div className="col-md-6 banner__img">
        <img src={BannerImg} alt="banner" />
      </div>
    </div>
  </div>
);

export default Banner;
