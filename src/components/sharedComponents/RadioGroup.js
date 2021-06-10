import PTypes from 'prop-types';

function RadioGroup({ options, value, ...props }) {
  return (
    <div>
      {options.map(({ value: optionValue, label }) => (
        <label key={optionValue}>
          <input
            type="radio"
            value={optionValue}
            checked={optionValue === value}
            {...props}
          />
          {label}
        </label>
      ))}
    </div>
  );
}

RadioGroup.propTypes = {
  options: PTypes.arrayOf(
    PTypes.shape({
      value: PTypes.string.isRequired,
      label: PTypes.node.isRequired,
    }).isRequired
  ).isRequired,
  value: PTypes.string.isRequired,
};

export default RadioGroup;