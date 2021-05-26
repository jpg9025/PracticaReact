import React from 'react';
import FormField from '../../sharedComponents/FormField.js';
import Button from '../../sharedComponents/Button.js';
import FileInput from '../../sharedComponents/FileInput.js';
import TagsSelector from '../../sharedComponents/TagsSelector.js';

//Create a formData to ensure the sending of the picture 
const formData = new FormData();

const filterValues = {
    name: ({ value }) => String(value),
    checkbox: ({ checked }) => checked,
    number: ({ value }) => Number(value),
    'select-multiple': ({ selectedOptions }) =>
      [...selectedOptions].map(({ value }) => value),
    file: ({ files }) => files[0] || null,
};
   
const defaultValue = ({ value }) => value;

// Create an initialFormValue to give it to useState - first render
const initialFormValue = {name:'', price: 0, sale: true, tags: [], photo: null};

const NewAdvertForm = ({onSubmit}) => {

    const [formValues, setFormValue] = React.useState(initialFormValue);

    const { name, price, sale, tags, photo} = formValues;

    const updateFormValue = (name, value) => {
        setFormValue(currentFormValue => ({
          ...currentFormValue,
          [name]: value,
        }));
    };

    const handleChange = event => {
        const valueGetter = filterValues[event.target.type] || defaultValue;
        updateFormValue(event.target.name, valueGetter(event.target));
        console.log(event.target.type);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormField 
            type="text"
            name="name"
            label="Item name"
            value={name}
            onChange={handleChange}
            />

            <FormField
            type="number"
            name="price"
            label="Item price"
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