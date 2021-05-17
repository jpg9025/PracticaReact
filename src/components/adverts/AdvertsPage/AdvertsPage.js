import React from 'react';
import classnames from 'classnames';

import './AdvertsPage.css';

import { getLatestAdverts } from '../../../API/adverts.js';
import Layout from '../../layout/Layout/Layout.js';

const AdvertsPage = ({ className, ...props }) => {
    const [ adverts, setAdverts ] = React.useState([]);

    React.useEffect(() => {
        getLatestAdverts().then(adverts => {setAdverts(adverts)});
    }, []);

    const handleClick = () => {
        alert('Pendiente enlace a detalle');
    };

    const items = adverts.map(advert => 
        <li key={advert.id} onClick={handleClick}>
            {advert.name}
        </li>
    );

    return <div className={classnames("advertsPage", className )}>
        <Layout title={process.env.REACT_APP_TITLE} {...props}>
            <ul style={{ color: adverts.length > 3 ? 'pink' : 'green' }}>
                {items}
            </ul>
        </Layout>
    </div>;

};

export default AdvertsPage;