import React from 'react';
import RangeSelector from '../sharedComponents/RangeSelector.js';
import TagsSelector from './TagsSelector.js';
import Button from '../sharedComponents/Button.js';
import EmptyList from '../../components/adverts/EmptyList/EmptyList.js';

import './FilterAdverts.css';

const FilterAdverts = (props) => {


    const [filterValue, setFilterValue] = React.useState("", []);
    const { adverts, filterAdverts } = props;

    const prices = adverts.map(advert => advert.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
   
    const {tags=[], sale} = filterValue;

    const filteringAdverts = (value) => {
        // Filter by name
        if(typeof(value)==='string') {
            filterAdverts(adverts.filter(data => {
                return data.name.toLowerCase().includes(filterValue.toLowerCase())
            }))
        
        // Filter by prices
        } else if((typeof(value) !== 'undefined') && (value.name === "prices")) {
            filterAdverts(adverts.filter(data => {
                if(value.value[0] < data.price && value.value[1]>data.price) {
                    return data;
                }
            }))
        // Filter by tags
        } else if (typeof(value[0] === 'string')){
            filterAdverts(adverts.filter(data => {
                return value.tags.filter(tags => data.tags.includes(tags) ? (data, console.log(data)) : <EmptyList/>);
                //return value.tags.filter(tags => data.tags.includes(tags) ? data : <EmptyList/>);
                //return value.tags.forEach(tag => data.tags.includes(tag) ? value : data.tags);
            }))
        }
        // Filter by sale
        /*else if(typeof(value)==='boolean') {
            filterAdverts(adverts.filter(data => {
                if(data.name === 'sale'){
                    return data;
                } else if(data.name  !== 'sale'){
                    return data;
                } else {
                    return data;
                }
            }))
        }*/
    }

    const handleChange = (event) => {
        filteringAdverts(event.target)
    }

    const updateFormValue = (name, value) => {
        setFilterValue(currentFormValue => ({
          ...currentFormValue,
          [name]: value,
        }));
        return filterValue;
    };

    const handleChangeTags = event => {
        console.log(event.target)
        const finalTagsSellection = updateFormValue(event.target.name, event.target.value);
        //this.setState(finalTagsSellection); 
        console.log(event.target.value, finalTagsSellection, 'finalTagsSellection');
        console.log(filterValue, 'filterValue');
        filteringAdverts(finalTagsSellection);
    };

    return (
        <>
            <input onChange={(event) => setFilterValue(event.target.value)} value={(filterValue === 'sting' ? filterValue : undefined )} placeholder="What are you looking for?" />
            <RangeSelector name="prices" marks={{ [min]: min, [max]: max }}min={min} max={max} onChange={handleChange}/>
            <TagsSelector multiple name="tags" value={tags} onChange={handleChangeTags}/>
            <Button onClick={() => filteringAdverts(filterValue)}>Search</Button>
        </>
    )
};

export default FilterAdverts;