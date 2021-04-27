import React from 'react';

import { getLatestAdverts } from '../../API/adverts.js';

const AdvertsPage = () => {
    const [adverts, setAdverts ] = React.useState([]);

    React.useEffect(() => {
        getLatestAdverts().then(adverts => {setAdverts(adverts.data)});
    }, []);

    const handleClick = () => {
        alert('Pendiente enlace a detalle');
    };

    return <div className="advertsPage">
        <ul>
            {adverts.map(advert => 
            <li key={advert.id} onClick={handleClick}>
                {advert.name}
            </li>)}
        </ul>
    </div>;
};

export default AdvertsPage;