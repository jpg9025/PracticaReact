import React from 'react';
import FormField from '../../sharedComponents/FormField.js';
import Button from '../../sharedComponents/Button.js';
import FileInput from '../../sharedComponents/FileInput.js';
import TagsSelector from '../../sharedComponents/TagsSelector.js';
import PTypes from 'prop-types';

import './NewAdvertForm.css';

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

    const { name, price, sale, tags} = formValues;

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

            <div className="newAdvert-checkbox">
                <label htmlFor="sale">Are you seling it?</label>
                <input 
                type="checkbox"
                name="sale"
                checked={sale}
                onChange={handleChange}
                />
            </div>

            <TagsSelector
            className="newAdvert-TagsSelector"
            name="tags"
            value={tags}
            onChange={handleChange}/>

            <FileInput
            className="newAdvert-fileInput"
            name="photo"
            onChange={handleChange}
            />

            <div className="submit-wrapper">
                <Button 
                type="submit" 
                className="newAdvert-submit"
                disabled={!name || !price || !tags}
                >
                    Create Advert
                </Button>
            </div>

        </form>
    )
};

NewAdvertForm.PTypes = {
    onSubmit: PTypes.func.isRequired,
    name: PTypes.string.isRequired,
    sale: PTypes.bool.isRequired,
    price: PTypes.number.isRequired,
    tags: PTypes.arrayOf(PTypes.string).isRequired
}

export default NewAdvertForm;