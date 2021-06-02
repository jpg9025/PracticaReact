import React from 'react';
import FormField from '../sharedComponents/FormField.js';
import RangeSelector from '../sharedComponents/RangeSelector.js';
import { defaultFilters } from '../../utilities/filters.js';
import TagsSelector from './TagsSelector.js';
import Button from '../sharedComponents/Button.js';

import './FilterAdverts.css';


const FilterAdverts = (props) => {

    const [filterValue, setFilterValue] = React.useState("");
    const { adverts, filterAdverts} = props;

    const prices = adverts.map(advert => advert.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);

    const filteringAdverts = (value) => {
       
       filterAdverts(adverts.filter(data => {
          return data.name.toLowerCase().includes(filterValue.toLowerCase())
        }))

        filterAdverts(adverts.filter(data => {
            if(value.value[0] < data.price && value.value[1]>data.price) {
                return data;
            }
        }))

        filterAdverts(adverts.filter(data => {
            return data.tags.forEach(value => value === data.tags ? value : data.tags);
        }))
        
    }

    const handleChange = (event) => {
        filteringAdverts(event.target)
    }

    const handleChangeTags = (event) => {
        filteringAdverts(event.target.value)
        console.log(event)
    }

    
  
    return (
        <>
            <input onChange={(e) => setFilterValue(e.target.value)} value={filterValue} placeholder="inserte artículo" />
            <RangeSelector name="prices" min={min} max={max} onChange={handleChange}/>
            <Button onClick={() => filteringAdverts(filterValue)}>Search</Button>
            <TagsSelector value={(event) => setFilterValue(event.target.value)} onChange={handleChangeTags}/>
        </>
    )
};

export default FilterAdverts;