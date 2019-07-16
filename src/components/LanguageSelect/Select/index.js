import React from 'react';
import T from 'prop-types';

import View from './View';

export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event);
  }
  render() {
    return (
      <View {...this.props} onChange={this.onChange} />
    );
  }
}

Select.propTypes = {
  onChange: T.func.isRequired,
};

export default Select;