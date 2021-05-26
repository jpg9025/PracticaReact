import React from 'react';
import FormField from '../../sharedComponents/FormField.js';
import Button from '../../sharedComponents/Button.js';
import FileInput from '../../sharedComponents/FileInput.js';
import TagsSelector from '../../sharedComponents/TagsSelector.js';


const filterValues = {
    checkbox: ({ checked }) => checked,
    number: ({ value }) => Number(value),
    'select-multiple': ({ selectedOptions }) =>
      [...selectedOptions].map(({ value }) => value),
    file: ({ files }) => files[0] || null,
};
   
const defaultValue = ({ value }) => value;
const initialFormValue = {name:'', price: 0, sale: true, tags: []};

const NewAdvertForm = ({onSubmit}) => {
    // Form State
    const [formValues, setFormValue] = React.useState(initialFormValue);

    // Tags State
    const [ tags, setTags ] = React.useState([]);

    const name='traKata';
    const price=25;
    const sale=false;


    const updateFormValue = (name, value) => {
        setFormValue(currentFormValue => ({
          ...currentFormValue,
          [name]: value,
        }));
    };

    const handleChange = event => {
        const valueGetter = filterValues[event.target.type] || defaultValue;
        updateFormValue(event.target.name, valueGetter(event.target));
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormField 
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            />

            <FormField
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            />

            <div>
                <label htmlFor="sale">Are you seling it?</label>
                <input 
                type="checkbox"
                name="sale"
                checked={sale}
                onChange={handleChange}
                />
            </div>

            <TagsSelector
            name="tags"
            value={tags}
            onChange={handleChange}/>

            <FileInput
            name="photo"
            onChange={handleChange}
            />

            <Button 
            type="submit" 
            className="newAdvert-submit"
            >
                Create Advert
            </Button>

        </form>
    )
};

export default NewAdvertForm;