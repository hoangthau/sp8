import React, { Component } from 'react';
import Slider from 'react-slick';

import img1 from '../assets/amenities.jpg';
import img2 from '../assets/focus.jpg';
import img3 from '../assets/terms.jpg';
import img4 from '../assets/amenities.jpg';
import img5 from '../assets/focus.jpg';
import img6 from '../assets/terms.jpg';

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
            <img src={img1} alt="img" />
          </div>
          <div>
            <img src={img2} alt="img" />
          </div>
          <div>
            <img src={img3} alt="img" />
          </div>
          <div>
            <img src={img4} alt="img" />
          </div>
          <div>
            <img src={img5} alt="img" />
          </div>
          <div>
            <img src={img6} alt="img" />
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
            <img src={img1} alt="img" />
          </div>
          <div>
            <img src={img2} alt="img" />
          </div>
          <div>
            <img src={img3} alt="img" />
          </div>
          <div>
            <img src={img4} alt="img" />
          </div>
          <div>
            <img src={img5} alt="img" />
          </div>
          <div>
            <img src={img6} alt="img" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Gallery;
