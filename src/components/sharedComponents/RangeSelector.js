import React from 'react';
import PTypes from 'prop-types';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

function SelectRange({ name, onChange, min, max, ...props }) {
  const handleChange = ([minValue, maxValue]) => {
    onChange({ target: { name, value: [ minValue || min, maxValue || max ] } });
  };
  return <Range min={min} max={max} onChange={handleChange} {...props} />;
}

SelectRange.propTypes = {
  name: PTypes.string.isRequired,
  onChange: PTypes.func.isRequired,
  min: PTypes.number.isRequired,
  max: PTypes.number.isRequired,
};

export default SelectRange;