import React from 'react';
import classnames from 'classnames';

import './AdvertsPage.css';

import { getLatestAdverts } from '../../../API/adverts.js';
import Layout from '../../layout/Layout/Layout.js';

const AdvertsPage = ({ className }) => {
    const [adverts, setAdverts ] = React.useState([]);

    React.useEffect(() => {
        getLatestAdverts().then(adverts => {setAdverts(adverts.data)});
    }, []);

    const handleClick = () => {
        alert('Pendiente enlace a detalle');
    };

    return <div className={classnames("advertsPage", className )}>
        <Layout title={process.env.REACT_APP_TITLE}>
            <ul style={{ color: adverts.length > 3 ? 'pink' : 'green' }}>
                {adverts.map(advert => 
                <li key={advert.id} onClick={handleClick}>
                    {advert.name}
                </li>)}
            </ul>
        </Layout>
    </div>;

};

export default AdvertsPage;