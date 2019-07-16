import React from 'react';

import Book from 'components/Home/Book';
import Modal from 'components/Home/Modal';

import './Plans.scss';
import translate from './translate';

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
            {translate('close')}
          </button>
          <Book />
        </Modal>
        <div className="price-plan">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="plan-col">
                  <div className="price">
                    <h4>{translate('month6')}</h4>
                    <p>{translate('month6Desc')}</p>
                    <h2>$2,000</h2>
                    <p>{translate('starting')}</p>
                    <button onClick={this.toggle}>{translate('book')}</button>
                  </div>
                  <div className="includes">
                    <h4>{translate('includes')}:</h4>
                    <p>{translate('allAmenities')}</p>
                    <p>
                      <b>{translate('free')}</b> {translate('cleaning')}
                    </p>
                    <p>
                      <b>{translate('free')}</b> {translate('printing')}
                    </p>
                    <p>
                      <b>{translate('free')}</b> {translate('coffee')}
                    </p>
                    <p>
                      <b>{translate('free')}</b> {translate('beer')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="plan-col">
                  <div className="price price-12">
                    <h4>{translate('month12')}</h4>
                    <p>{translate('month12Desc')}</p>
                    <h2>$1,600</h2>
                    <p>{translate('starting')}</p>
                    <button onClick={this.toggle}>{translate('book')}</button>
                  </div>
                  <div className="includes">
                    <h4>{translate('includes')}:</h4>
                    <p>{translate('allAmenities')}</p>
                    <p>
                      <b>{translate('free')}</b> {translate('cleaning')}
                    </p>
                    <p>
                      <b>{translate('free')}</b> {translate('printing')}
                    </p>
                    <p>
                      <b>{translate('free')}</b> {translate('coffee')}
                    </p>
                    <p>
                      <b>{translate('free')}</b> {translate('beer')}
                    </p>
                    <h4 className="plus">{translate('plus')}:</h4>
                    <p>
                      {translate('esta')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="plan-col">
                  <div className="price price-24">
                    <h4>{translate('month24')}</h4>
                    <p>{translate('month24Desc')}</p>
                    <h2>$1,300</h2>
                    <p>{translate('starting')}</p>
                    <button onClick={this.toggle}>{translate('book')}</button>
                  </div>
                  <div className="includes">
                    <h4>{translate('includes')}:</h4>
                    <p>{translate('allAmenities')}</p>
                    <p>
                      <b>{translate('free')}</b> {translate('cleaning')}
                    </p>
                    <p>
                      <b>{translate('free')}</b> {translate('printing')}
                    </p>
                    <p>
                      <b>{translate('free')}</b> {translate('coffee')}
                    </p>
                    <p>
                      <b>{translate('free')}</b> {translate('beer')}
                    </p>
                    <h4 className="plus">{translate('plus')}:</h4>
                    <p>
                     {translate('esta')}
                    </p>
                    <p>
                    {translate('xxv')}
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
