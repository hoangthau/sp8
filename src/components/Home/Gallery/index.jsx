import React, { Component } from 'react';
import Slider from 'react-slick';

import './Gallery.scss';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="gallery">
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          className="slider1"
        >
          <div>
            <img src='/assets/amenities.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/focus.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/terms.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/amenities.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/focus.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/terms.jpg' alt="img" />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider2"
        >
          <div>
            <img src='/assets/amenities.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/focus.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/terms.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/amenities.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/focus.jpg' alt="img" />
          </div>
          <div>
            <img src='/assets/terms.jpg' alt="img" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Gallery;
