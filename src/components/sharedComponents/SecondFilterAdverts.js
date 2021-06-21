import React from 'react';
//import RangeSelector from '../sharedComponents/RangeSelector.js';
//import TagsSelector from './TagsSelector.js';
import Button from '../sharedComponents/Button.js';
//import RadioGroup from '../sharedComponents/RadioGroup.js';
//import EmptyList from '../../components/adverts/EmptyList/EmptyList.js';
import { getLatestAdverts } from '../../API/adverts.js';
import AdvertsList from '../adverts/AdvertsList/AdvertsList.js';
import initialFilters from './filters.js';

const SecondFilterAdverts = ({onFilter, adverts, history}) => {

    const [ name, setName ] = React.useState(initialFilters.name);

    const [filterValue, setFilterValue] = React.useState(initialFilters);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilter({ name });
    };

    /*const filteredAdverts = async (adverts, filters) => {
        const result = await adverts.filter((item) => !filters.name || item.includes(filters.name));
        return result;
    }*/
    //const filteredAdverts =  adverts.filter((item) => !filters.name || item.includes(filters.name));

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleChange}/>
                <Button type="submit" value="filter">Filter</Button>
            </form>
        </div>
    ); 
};

export default SecondFilterAdverts;