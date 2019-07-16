import React from 'react';
import T from 'prop-types';

import { find } from 'lodash';
import Item from './Item';

import './styles.scss';

export class SelectView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.getActiveItem(),
    };
    this.changeOption = this.changeOption.bind(this);
  }

  getActiveItem() {
    const { value, options } = this.props;
    return find(options, item => item.value === value);
  }

  changeOption(item) {
    this.setState({ activeItem: item });
    this.props.onChange(item.value);
  }

  render() {
    const { options, supportedLanguages } = this.props;
    const { activeItem } = this.state;

    return (
      <div className="select">
        <button className="select__active">
          <span>{activeItem.label}</span>
          <i className="icon icon-small-down" />
        </button>
        <div className="select__content">
          {options.map((item, index) => (
            <Item
              key={index}
              item={item}
              activeItem={activeItem}
              changeOption={this.changeOption}
              disabled={supportedLanguages.indexOf(item.value) === -1}
            />
          ))}
        </div>
      </div>
    );
  }
}

SelectView.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  options: T.arrayOf(
    T.shape({
      label: T.string.isRequired,
      value: T.string.isRequired,
    }),
  ).isRequired,
  supportedLanguages: T.arrayOf(T.string).isRequired,
};

export default SelectView;