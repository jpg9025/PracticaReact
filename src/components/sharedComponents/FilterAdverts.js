import React from 'react';
import RangeSelector from '../sharedComponents/RangeSelector.js';
import TagsSelector from './TagsSelector.js';
import Button from '../sharedComponents/Button.js';
//import RadioGroup from '../sharedComponents/RadioGroup.js';
import EmptyList from '../../components/adverts/EmptyList/EmptyList.js';

import './FilterAdverts.css';

const FilterAdverts = (props) => {

    const { adverts, filterAdverts } = props;

    const [filterValue, setFilterValue] = React.useState("", []);

    React.useEffect(() => {
        filterAdverts(filterValue);
    }, []);
    // When I try to include filterValue in dependency array, AdvertsList component can not execute advert.map

    /*const saleFilter = {
        all: { value: 'all', label: 'All' },
        sell: { value: 'sell', label: 'Sell' },
        buy: { value: 'buy', label: 'Buy' },
    };*/

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
            filterAdverts(adverts.filter(data => (value.value[0] < data.price && value.value[1] > data.price) ? data : undefined))
        // Filter by tags
        } else if (typeof(value[0] === 'string')){
            filterAdverts(adverts.filter(data => {
                return value.tags.filter(tags => data.tags.includes(tags) ? data : <EmptyList /> )
                //return data.tags.filter(tags => value.tags.includes(tags) ? data : <EmptyList/>);
            }))
        }
        // Filter by sale
        else if(typeof(value)==='boolean') {
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
        filteringAdverts(event.target);
        //filteringAdverts(filterValue); --> static render, using event.target the filter by prices is instant
    }

    const updateFormValue = (name, value) => {
        setFilterValue(currentFormValue => ({
          ...currentFormValue,
          [name]: value,
        }));
        return filterValue;
    };

    const handleChangeTags = event => {
        const finalTagsSellection = updateFormValue(event.target.name, event.target.value);
        filteringAdverts(finalTagsSellection);
    };

    /*const handleChangeSale = event => {
        const saleSellection = updateFormValue(event.target.name, event.target.value);
        filteringAdverts(saleSellection);
    };*/

    return (
        <>
            <input onChange={(event) => setFilterValue(event.target.value)} value={(filterValue === 'sting' ? filterValue : undefined )} placeholder="What are you looking for?" />
            <RangeSelector name="prices" marks={{ [min]: min, [max]: max }}min={min} max={max} onChange={handleChange}/>
            <TagsSelector className="tagsSellector" multiple name="tags" value={tags} onChange={handleChangeTags}/>
            {/*<RadioGroup name="sale" value={sale} onChnage={handleChangeSale} options={Object.values(saleFilter)}/>*/}
            <Button onClick={() => filteringAdverts(filterValue)}>Search</Button>
        </>
    )
};

export default FilterAdverts;