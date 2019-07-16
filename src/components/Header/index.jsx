import React from 'react';

import Book from 'components/Home/Book';
import Modal from 'components/Home/Modal';
import logo from './sp8.svg';
import './Header.scss';
import translate from './translate';

class Header extends React.PureComponent {
  state = {
    open: false,
    scrolled: false
  };

  toggle = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  goHome = () => {
    window.location = '/';
  };

  componentDidMount() {
    document.addEventListener('scroll', this.scrollHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    const scrollTop = window.scrollY || 0;
    this.setState({ scrolled: !!scrollTop });
  };

  render() {
    return (
      <React.Fragment>
        <Modal open={this.state.open}>
          <button className="close" onClick={this.toggle}>
            {translate('close')}
          </button>
          <Book />
        </Modal>
        <div className={`header ${this.state.scrolled ? 'scrolled' : ''}`}>
          <div className="container">
            <img
              onClick={this.goHome}
              src={logo}
              width={59}
              height={24}
              alt="logo"
            />
            <div className="header__links">
              <a className="header__pricing" href="/pricing">
              {translate('pricing')}
              </a>
              <button className="header__book" onClick={this.toggle}>
              {translate('book')}
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
