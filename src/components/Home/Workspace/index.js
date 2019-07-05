import React from 'react';
import Slider from 'react-slick';

import Modal from 'components/Home/Modal';
import Gallery from '../Gallery';

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
        <Modal open={this.state.open} className="modal-gallery">
          <button className="close" onClick={this.toggle}>
            Close
          </button>
          <Gallery />
        </Modal>
        <div id="workspace" className="workspace container">
          <h2>Your new workspace</h2>
          <p>View the SP8 gallery.</p>
          <div className="row gallery-overview">
            <div className="col-md-6 left">
              <img src='/assets/banner.jpg' alt="left" />
            </div>
            <div className="col-md-6 right">
              <div className="right-1" />
              <div className="right-2" />
            </div>
          </div>
          <div className="slider-mobile">
            <Slider {...settings}>
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
          <button className="view-photos" onClick={this.toggle}>
            View photos
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Workspace;
