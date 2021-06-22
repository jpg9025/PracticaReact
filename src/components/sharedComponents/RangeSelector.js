import React from 'react';
import PTypes from 'prop-types';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './RangeSelector.css';

function SelectRange({ name, onChange, min, max }) {
  const handleChange = ([minValue, maxValue]) => {
    onChange({ target: { name, value: [ minValue || min, maxValue || max ] } });
  };
  return <Range className="rangeSelector" min={min} max={max} defaultValue={[min,max]} onChange={handleChange} />;
}

SelectRange.propTypes = {
  name: PTypes.string.isRequired,
  onChange: PTypes.func.isRequired,
  min: PTypes.number.isRequired,
  max: PTypes.number.isRequired,
};

export default SelectRange;