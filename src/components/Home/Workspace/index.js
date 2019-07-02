import React from 'react';
import Slider from 'react-slick';

import img1 from '../assets/amenities.jpg';
import img2 from '../assets/focus.jpg';
import img3 from '../assets/terms.jpg';
import img4 from '../assets/amenities.jpg';
import img5 from '../assets/focus.jpg';
import img6 from '../assets/terms.jpg';

import BookModal from 'components/Home/BookModal';
import Gallery from '../Gallery';
import Left from '../assets/banner.jpg';

import './Workspace.scss';

class Workspace extends React.PureComponent {
  state = {
    open: false
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <React.Fragment>
        <BookModal open={this.state.open} className="modal-gallery">
          <button className="close" onClick={this.toggle}>
            Close
          </button>
          <Gallery />
        </BookModal>
        <div className="workspace container">
          <h2>Your new workspace</h2>
          <p>View the SP8 gallery.</p>
          <div className="row gallery-overview">
            <div className="col-md-6 left">
              <img src={Left} alt="left" />
            </div>
            <div className="col-md-6 right">
              <div className="right-1" />
              <div className="right-2" />
            </div>
          </div>
          <div className="slider-mobile">
            <Slider {...settings}>
              <div>
                <img src={img1} />
              </div>
              <div>
                <img src={img2} />
              </div><div>
                <img src={img3} />
              </div><div>
                <img src={img4} />
              </div>
            </Slider>
          </div>
          <button className="view-photos" onClick={this.toggle}>
            View photos
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Workspace;
