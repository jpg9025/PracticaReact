import React from 'react';
import FormField from '../sharedComponents/FormField.js';
import RangeSelector from '../sharedComponents/RangeSelector.js';
import { defaultFilters } from '../../utilities/filters.js';
import TagsSelector from './TagsSelector.js';
import Button from '../sharedComponents/Button.js';

import './FilterAdverts.css';

const initialFilterValues = {name:'', price: 0, sale: true, tags: []};

const filterValues = {
    name: ({ value }) => String(value),
    checkbox: ({ checked }) => checked,
    number: ({ value }) => Number(value),
    'select-multiple': ({ selectedOptions }) =>
      [...selectedOptions].map(({ value }) => value),
    file: ({ files }) => files[0] || null,
};
   
const defaultValue = ({ value }) => value;

const FilterAdverts = (initialFormValue, prices, onFilter) => {
    const [formValue, setFormValue] = React.useState(initialFormValue);

    const [ filterValues, setFilterValues ] = React.useState(initialFilterValues);

    const min = Math.min(prices); 
    const max = Math.max(prices);

    const {name, price, tags, sale } = filterValues;
    
    const handleChangeTags = event => {
        const newFilterValues = { ...filterValues, [event.target.name]: event.target.value };
        setFilterValues(newFilterValues);
    };

    const handleChange = event => {
        const valueGetter = filterValues[event.target.type] || defaultValue;
        updateFormValue(event.target.name, valueGetter(event.target));
    };

    const handleSubmit = (onSubmit) => event => {
        event.preventDefault();
        onSubmit(formValue);
    };

    const handleReset = () => {
        setFormValue(defaultFilters);
        onFilter(defaultFilters);
      };

    const updateFormValue = (name, value) => {
        setFormValue(currentFormValue => ({
          ...currentFormValue,
          [name]: value,
        }));
    };
  
    return (
    <form className="filter-form">
        <FormField
        type="text"
        value={name}
        label="Item name: "
        onChange={handleChange}
        />

        {/*<RangeSelector 
        min={min}
        max={max}
        value={price}
        name="price"
        onChange={handleChange}
        style={{ width: 500, margin: 25 }}
        marks={{ [min]: min, [max]: max }}
        />*/}

        <TagsSelector
        className="Filter-TagsSelector"
        name="tags"
        value={tags}
        onChange={handleChangeTags}/>

        {/*<input
        type="radio"
        value={sale}
        onChange={handleChange}
        />*/}

        <Button 
        type="reset"
        className="Filter-button"
        onChange={handleReset}
        >
            Reset
        </Button>

        <Button 
        type="submit"
        onChange={handleSubmit}
        >
            Filter
        </Button>

    </form>)
};

export default FilterAdverts;