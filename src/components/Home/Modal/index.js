import React from 'react';

import './Modal.scss';

class Modal extends React.Component {
  componentDidUpdate() {
    if (this.props.open) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = 'static';
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
