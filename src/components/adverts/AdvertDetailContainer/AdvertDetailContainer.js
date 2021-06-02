import React from 'react';
import PTypes from 'prop-types';
import { advertType } from '../Advert/Advert.js';

import './AdvertDetailContainer.css';

import cosa from '../../../images/Cosa.jpg';


//<img src={require(`../../../images/${advert.name}.jpg`)} alt="bici"/>
//<img className="photo" src={`../../../images/${advert.name}.jpg`} alt="item" /> 

const AdvertDetailContainer =({ advert }) => {

    console.log(advert);
    return (
        <div className="AdvertDetailContainer">
            <div className="AdvertDetail-header">
                <span className="AdvertDetail-name">Item: <strong>{advert.name}</strong></span>
                <span className="AdvertDetail-price">Price: {advert.price}€</span>
                <span className="AdvertDetail-onsale">On sale: {advert.sale ? 'yes' : 'no'}</span>
            </div>
            <div className="AdvertDetail-photo">
                <img src={advert.photo ? advert.photo : cosa } alt="item" /> 
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