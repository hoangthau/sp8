import React from 'react';

import Book from 'components/Home/Book';
import BookModal from 'components/Home/BookModal';
import logo from './sp8.svg';
import './Header.scss';

class Header extends React.PureComponent {
  state = {
    open: false
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    return (
      <React.Fragment>
        <BookModal open={this.state.open}>
          <button className="close" onClick={this.toggle}>
            Close
          </button>
          <Book />
        </BookModal>
        <div className="header container">
          <img src={logo} width={59} height={24} alt="logo" />
          <div className="header__links">
            <a className="header__pricing" href="">
              Pricing
            </a>
            <button className="header__book" onClick={this.toggle}>
              Book a tour
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
