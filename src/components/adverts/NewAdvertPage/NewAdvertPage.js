import React from 'react';
import Layout from '../../layout/Layout/Layout.js';
import NewAdvertForm from '../NewAdvertForm/NewAdvertForm.js';
import PTypes from 'prop-types';

import {createAdvert } from '../../../API/adverts.js';


const NewAdvertPage = ({history, className, onSubmit}) => {

    const [error, setError] = React.useState(null);

    const handleSubmit = async (newAdvert) => {
        try {
            const advert = await createAdvert(newAdvert);
            history.push(`/adverts/${advert.id}`);
            console.log(advert);
        } catch (error) {
            setError(true);
            console.log(error.statusCode, error.message);
            console.log(error);
        };
    };

    return (
        <Layout title="New Advertisment">
            <NewAdvertForm onSubmit={handleSubmit}></NewAdvertForm>
        </Layout>
    );

};

NewAdvertPage.PTypes = {
    handleSubmit: PTypes.func.isRequired,
}

export default NewAdvertPage;

