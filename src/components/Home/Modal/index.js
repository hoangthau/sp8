import React from 'react';

import './Modal.scss';

class Modal extends React.Component {
  componentDidUpdate() {
    if (this.props.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  render() {
    const { open, children, className } = this.props;
    return (
      <React.Fragment>
        {open && (
          <div className={`modal ${className}`}>
            <div className="modal__content">{children}</div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
