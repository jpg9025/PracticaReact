import React from 'react';
import PTypes from 'prop-types';
import Advert, { advertType } from '../Advert/Advert.js';

const renderAdvert = advert => <Advert key={advert.id} {...advert} />;

const AdvertsList = ({ adverts }) => {
    return <ul className="advertsList">{adverts.map(renderAdvert)}</ul>
};

AdvertsList.propTypes = {
    adverts: PTypes.arrayOf(PTypes.shape(advertType)),
};

export default AdvertsList;