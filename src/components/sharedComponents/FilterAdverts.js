import React from 'react';
import FormField from '../sharedComponents/FormField.js';
import Slider, { Range } from 'rc-slider';

const FilterAdverts = () => {

    const [ filterValues, setFilterValues ] = React.useState(false);

    const min = 0; 
    const max = 500;
    const {name, price, tags, sale } = filterValues;
    
    const handleChange = event => {
        const newFilterValues = { ...filterValues, [event.target.name]: event.target.value };
        setFilterValues(newFilterValues);
    }
  
    return (
    <form className="filter-form">
        <FormField
        type="text"
        value={name}
        onChange={handleChange}
        />

        <Range min={min} max={max}
        />

    </form>)
};

export default FilterAdverts;