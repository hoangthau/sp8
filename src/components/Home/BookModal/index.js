import React from 'react';

import './Modal.scss';

class BookModal extends React.Component {
  componentDidUpdate() {
    if (this.props.open) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = 'static';
    }
  }

  render() {
    const { open, children } = this.props;
    return (
      <React.Fragment>
        {open && (
          <div className="modal">
            <div className="modal__content">{children}</div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default BookModal;
