import React from 'react';
import Layout from '../../layout/Layout/Layout.js';
import { Redirect } from 'react-router-dom';

import './AdvertDetailPage.css';

import { getAdvertDetail } from '../../../API/adverts.js';

class AdvertDetailPage extends React.Component {

    constructor() {
        super();
        this.state = {
            advert: null,
            error: null,
        }
    }
    componentDidMount() {
        //getAdvertDetail(this.props.params.id).then(advert => this.setState({ advert })).catch(error => console.log(error.statusCode));
        getAdvertDetail(this.props.match.params.id)
        .then(advert => this.setState({ advert }))
        .catch(error => {console.log(error.statusCode)});
    }

    render() {
        const { advert, error } = this.state;

        //const { id, createdAt, name, sale, price, tags, photo } = advert;
        // Can not destructure advert

        console.log(advert);
        //console.log(advert.price);
        
        const json = JSON.stringify(advert);
        const advertData = JSON.parse(json);

        if(error && error.statusCode === 404) {
            return <Redirect to='/404' />;
        }

        return (
        <Layout title="Advertisment detail">
            <div className="{AdvertDetail-wrapper}">
                <div>{JSON.stringify(advert)}</div>
            </div>
        </Layout>
        )
    }
}

export default AdvertDetailPage;

