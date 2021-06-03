import React from 'react';
import PTypes from 'prop-types';
import { advertType } from '../Advert/Advert.js';

import './AdvertDetailContainer.css';

import notfound from '../../../images/nopicture.png';

const AdvertDetailContainer =({ advert }) => {

    console.log(advert)
    console.log(advert.photo);
    return (
        <div className="AdvertDetailContainer">
            <div className="AdvertDetail-header">
                <span className="AdvertDetail-name">Item: <strong>{advert.name}</strong></span>
                <span className="AdvertDetail-price">Price: {advert.price}€</span>
                <span className="AdvertDetail-onsale">On sale: {advert.sale ? 'yes' : 'no'}</span>
            </div>
            <div className="AdvertDetail-photo">
                <img className="AdvertDetail-picture" src={advert.photo ? `${process.env.REACT_APP_API_BASE_URL}${advert.photo}` : notfound } style={{width:'500px', height:'300px'}}alt="item" /> 
            </div>
            <div className="AdvertDetail-footer">
                <span className="AdvertDetail-createdAt">Created at: {advert.createdAt}</span>
                <span className="AdvertDetail-tags">tags: {advert.tags}</span>
            </div>
        </div>
    );
};


AdvertDetailContainer.propTypes = {
    adverts: PTypes.arrayOf(PTypes.shape(advertType)),
};

export default AdvertDetailContainer;