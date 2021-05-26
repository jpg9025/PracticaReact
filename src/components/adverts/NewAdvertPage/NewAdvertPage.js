import React from 'react';
import Layout from '../../layout/Layout/Layout.js';
import NewAdvertForm from '../NewAdvertForm/NewAdvertForm.js';

import {createAdvert } from '../../../API/adverts.js';


const NewAdvertPage = ({history, className, onSubmit, ...props}) => {

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

export default NewAdvertPage;

