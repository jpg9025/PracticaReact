import React from 'react';
import RangeSelector from '../sharedComponents/RangeSelector.js';
import TagsSelector from './TagsSelector.js';
import Button from '../sharedComponents/Button.js';

import './FilterAdverts.css';


const FilterAdverts = (props) => {

    const [filterValue, setFilterValue] = React.useState("");
    const { adverts, filterAdverts} = props;

    const prices = adverts.map(advert => advert.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const {tags, sale} = filterAdverts;

    const filteringAdverts = (value) => {
        console.log(value[0]);
        
        // Filter by name
        if(typeof(value)==='string') {
            filterAdverts(adverts.filter(data => {
                return data.name.toLowerCase().includes(filterValue.toLowerCase())
              }))

        // Filter by tags
        } else if(typeof(value[0] === 'string')) {
            filterAdverts(adverts.filter(data => {
                return data.tags.forEach(value => value === data.tags ? value : data.tags);
                }
            ))

        // Filter by price
        } else if(typeof(value.value[0]) === 'number') {
            filterAdverts(adverts.filter(data => {
                if(value.value[0] < data.price && value.value[1]>data.price) {
                    return data;
                }
            }))
            
        // Filter by onsale
        } else if(typeof(value)==='boolean') {
            filterAdverts(adverts.filter(data => {
                if(data.name === 'sale'){
                    return data;
                } else if(data.name  !== 'sale'){
                    return data;
                } else {
                    return data;
                }
            }))
        }

    }


    const handleChange = (event) => {
        filteringAdverts(event.target)
    }

    const handleChangeTags = (event) => {
        filteringAdverts(event.target.value)
        console.log(event, 'event')
    }

    
  
    return (
        <>
            <input onChange={(event) => setFilterValue(event.target.value)} value={filterValue} placeholder="What are you looking for?" />
            <RangeSelector name="prices" marks={{ [min]: min, [max]: max }}min={min} max={max} onChange={handleChange}/>
            <Button onClick={() => filteringAdverts(filterValue)}>Search</Button>
            {/*<TagsSelector name="tags" value={tags} onChange={handleChangeTags}/>*/}
        </>
    )
};

export default FilterAdverts;