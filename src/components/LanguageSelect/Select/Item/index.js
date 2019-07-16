import React from 'react';
import T from 'prop-types';

const OptionItem = ({ item, activeItem, changeOption, disabled }) => {
  const handleItemClick = () => {
    changeOption(item);
  };

  return (
    <button
      tabIndex="0"
      disabled={disabled}
      className={`select__option${
        item.value === activeItem.value ? '--active select__option' : ''
      }`}
      value={item.value}
      onClick={handleItemClick}
    >
      {item.label}
    </button>
  );
};

OptionItem.propTypes = {
  item: T.shape({}).isRequired,
  activeItem: T.shape({}).isRequired,
  changeOption: T.func.isRequired,
  disabled: T.bool,
};

export default OptionItem;