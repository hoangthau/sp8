import React from 'react';

import Book from 'components/Home/Book';

import BookModal from '../BookModal';
import './Banner.scss';

class Banner extends React.PureComponent {
  state = {
    open: false
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open : !open });
  }

  render() {
    return (
      <React.Fragment>
        <BookModal open={this.state.open}>
          <button className="close" onClick={this.toggle}>Close</button>
          <Book />
        </BookModal>
        <div className="banner container">
          <div className="row">
            <div className="col-md-6 left">
              <div>
                <h1>The mono-working space</h1>
                <p>
                  Enjoy all the amenities of a professional working space with
                  the focus of a private office — reminaged in a gorgeously
                  designed workspace.
                </p>
                <button className="banner__book" onClick={this.toggle}>
                  Book a tour
                </button>
                <a className="banner__pricing" href="#book-a-tour">
                  See pricing
                </a>
              </div>
            </div>
            <div className="col-md-6 banner__img">
              <img src='/assets/banner.jpg'  alt="banner" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
