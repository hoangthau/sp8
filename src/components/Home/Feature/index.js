import React from 'react';

import './Feature.scss';

const Feature = () => (
  <div className="features container">
    <div className="row features-focus item">
      <div className="col-md-6 features-focus__img">
        <img src='/assets/focus.jpg' alt="Amenities" />
      </div>
      <div className="col-md-6 focus-desc">
        <h2>One focus space</h2>
        <p>We focus on what matters for a winning work space. </p>

        <p>
          We’ve designed each room to be a gorgeous, all-in-one unit with
          individual working stations, brainstorming area and a team-size
          meeting room or a private working booth. A private balcony overlooking
          the beautiful Esta Eatery for those who want a little more air.
          Bio-lock sensor ensure only your team can access, anytime.
        </p>

        <p>
          On average, we spend 8-10 hours a day at an office. When you work in a
          place that long, make sure it’s functional, comfortable and
          delightful.
        </p>
        <a>View the space</a>
      </div>
    </div>
    <div className="row features-amenity item">
      <div className="col-md-6 amenity-desc">
        <h2>Full amenities</h2>
        <p>
          We focus on amenities which matter to you. Everything else you need,
          beyond your focus workspace.
        </p>
        <p>
          Say hi to an all-white, hi-tech conferencing room. Elegant common
          place to impress your clients. Blazing fast internet. A full-equipped
          printing station. Coffee, tea and fruit water. Design and marketing
          services. Daily cleaning service to keep your space always sparkly.
        </p>
        <p>
          And what is best if right underneath you is the up-and-coming Easter
          Eatery, ran by one of the most innovative teams in the culinary
          industry.
        </p>
        <a>See all amenities</a>
      </div>
      <div className="col-md-6 features-amenity__img">
        <img src='/assets/amenities.jpg' alt="Amenities" />
      </div>
    </div>
    <div className="row features-term item">
      <div className="col-md-6 features-term__img">
        <img src='/assets/terms.jpg' alt="Amenities" />
      </div>
      <div className="col-md-6 terms-desc">
        <h2>Flexible terms</h2>
        <p>We focus on giving you the best options to grow.</p>

        <p>
          Leasing option starts from as low as a six month contract. You can pay
          month-to-month, quarter-by-quarter, or all at once, which ever work
          best to you. We don’t charge by head count, so as long as you can fit
          all of your team into your room, just do it.
        </p>

        <p>Enjoy flexibility while growing your team.</p>
        <a href="/pricing">See pricing</a>
      </div>
    </div>
  </div>
);

export default Feature;
