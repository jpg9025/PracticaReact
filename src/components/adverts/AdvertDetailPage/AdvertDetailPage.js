import React from 'react';
import Layout from '../../layout/Layout/Layout.js';
import AdvertDetailContainer from '../AdvertDetailContainer/AdvertDetailContainer.js';
import { Redirect } from 'react-router-dom';

import './AdvertDetailPage.css';

import { getAdvertDetail } from '../../../API/adverts.js';

class AdvertDetailPage extends React.Component {
    constructor() {
        super();
        this.state = {
            advert: {},
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

        if(error && error.statusCode === 404) {
            return <Redirect to='/404' />;
        }
 
        return (
            <Layout title="Advertisment detail">
                <AdvertDetailContainer advert={advert}/>
            </Layout>
        )
    }
}

export default AdvertDetailPage;

