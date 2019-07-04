import React from 'react';

import Book from 'components/Home/Book';
import Modal from 'components/Home/Modal';

import './Plans.scss';

class Plans extends React.PureComponent {
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
        <Modal open={this.state.open}>
          <button className="close" onClick={this.toggle}>
            Close
          </button>
          <Book />
        </Modal>
        <div className="price-plan">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="plan-col">
                  <div className="price">
                    <h4>6-month</h4>
                    <p>Our most flexible plan</p>
                    <h2>$2,000</h2>
                    <p>starting, per month (conditions applied)</p>
                    <button onClick={this.toggle}>Book a tour</button>
                  </div>
                  <div className="includes">
                    <h4>Includes:</h4>
                    <p>All amenities</p>
                    <p>
                      <b>Free</b> daily cleaning services
                    </p>
                    <p>
                      <b>Free</b> printing quota
                    </p>
                    <p>
                      <b>Free</b> coffee and tea (8AM - 5PM)
                    </p>
                    <p>
                      <b>Free</b> craft beer (4PM - 6PM)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="plan-col">
                  <div className="price price-12">
                    <h4>12-month</h4>
                    <p>Unlock extra perks</p>
                    <h2>$1,600</h2>
                    <p>starting, per month (conditions applied)</p>
                    <button onClick={this.toggle}>Book a tour</button>
                  </div>
                  <div className="includes">
                    <h4>Includes:</h4>
                    <p>All amenities</p>
                    <p>
                      <b>Free</b> daily cleaning services
                    </p>
                    <p>
                      <b>Free</b> printing quota
                    </p>
                    <p>
                      <b>Free</b> coffee and tea (8AM - 5PM)
                    </p>
                    <p>
                      <b>Free</b> craft beer (4PM - 6PM)
                    </p>
                    <h4 className="plus">Plus:</h4>
                    <p>
                      <span className="brown">Esta Eatery</span> Membership
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="plan-col">
                  <div className="price price-24">
                    <h4>24-month</h4>
                    <p>Exclusive benefits</p>
                    <h2>$1,300</h2>
                    <p>starting, per month (conditions applied)</p>
                    <button onClick={this.toggle}>Book a tour</button>
                  </div>
                  <div className="includes">
                    <h4>Includes:</h4>
                    <p>All amenities</p>
                    <p>
                      <b>Free</b> daily cleaning services
                    </p>
                    <p>
                      <b>Free</b> printing quota
                    </p>
                    <p>
                      <b>Free</b> coffee and tea (8AM - 5PM)
                    </p>
                    <p>
                      <b>Free</b> craft beer (4PM - 6PM)
                    </p>
                    <h4 className="plus">Plus:</h4>
                    <p>
                      <span className="brown">Esta Eatery</span> Membership
                    </p>
                    <p>
                      <b>Establishment XXV</b> Membership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Plans;
