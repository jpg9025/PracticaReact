import React from 'react';
import RangeSelector from '../sharedComponents/RangeSelector.js';
import TagsSelector from './TagsSelector.js';
import Button from '../sharedComponents/Button.js';
import RadioGroup from '../sharedComponents/RadioGroup.js';
import initialFilters, {saleFilter} from './filters.js';

const SecondFilterAdverts = ({onFilter, adverts}) => {

    const [ name, setName ] = React.useState(initialFilters.name);

    const [ price, setPrice ] = React.useState(initialFilters.price);

    const [tags, setTags ] = React.useState(initialFilters.tags);

    const [ sale, setSale ] = React.useState(initialFilters.sale);

    const prices = adverts.map(advert => advert.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);

    const handleChange = (event) => {
        if (event.target.name === 'name') {
            setName(event.target.value)
        } else if (event.target.name === 'price') {
            setPrice(event.target.value)
        } else if (event.target.name === 'sale') {
            setSale(event.target.value)
            console.log(event.target.value)
            console.log('todo el mundo quiere trakatá')
        };
    };

    const handleChangeTags = (event) => {
        setTags(event.target.value)
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        onFilter({ name, price, tags, sale });
    };

    /*const handleReset = (event) => {
        event.preventDefault();
        onFilter(initialFilters);
    };*/

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} name="name" onChange={handleChange}/>
                <RangeSelector name="price" value={price} marks={{ [min]: min, [max]: max }} min={min} max={max} onChange={handleChange} />
                <TagsSelector className="tagsSellector" multiple name="tags" value={tags} onChange={handleChangeTags}/>
                <RadioGroup value={sale} name="sale" options={Object.values(saleFilter)} onChange={handleChange}/>
                <Button type="submit" value="filter">Filter</Button>
                {/*<Button type="reset" value="reset" onClick={handleReset}>Reset</Button>*/}
            </form>
        </div>
    ); 
};

export default SecondFilterAdverts;