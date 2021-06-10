import React from 'react';
import { getTags } from '../../API/adverts.js';
import PTypes from 'prop-types';

const TagsSelector = ({ value, onChange, ...props }) => {
    const [tags, setTags] = React.useState([]);

    React.useEffect(() => {
        getTags().then(setTags);
    }, []);

    const handleChange = event => {
      const { name, checked, value: optionValue } = event.target;
      onChange({
        target: {
          name,
          value: checked ? [...value, optionValue] : value.filter(v => v !== optionValue),
        },
      });
    };

    const options = tags;
    
    return (
        <div>
          {options.map(option => (
            <label key={option}>
              <input
                type="checkbox"
                value={option}
                checked={value.includes(option)}
                onChange={handleChange}
                {...props}
              />
              {option}
            </label>
          ))}
        </div>
    );
};

TagsSelector.propTypes = {
  option: PTypes.bool,
  onChange: PTypes.func.isRequired,
  value: PTypes.arrayOf(PTypes.string),
}

export default TagsSelector;