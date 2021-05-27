import React from 'react';
import PTypes from 'prop-types';
import Advert, { advertType } from '../Advert/Advert.js';

//const renderAdvert = history => advert => <Advert key={advert.id} history={history} {...advert} />;

const AdvertsList = ({ adverts, history }) => {

    React.useEffect(() => {
        history.push('/');
    }, [adverts.length]);

    const handleClick = advertId => {
        history.push(`/advert/${advertId}`);
    };
    
    return <ul className="advertsList">{adverts.map(advert => <Advert key={advert.id} history={history} onClick={() => handleClick(advert.id)} {...advert} />)}</ul>
};

AdvertsList.propTypes = {
    adverts: PTypes.arrayOf(PTypes.shape(advertType)),
};

export default AdvertsList;