import React from 'react';
import PTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Advert.css';

const Advert = ({ name, sale, price, tags, photo, user }) => {
    /*const handleClick = () => {
        alert('Detail link pending...');
    };*/

    console.log(Advert.sale);

    return (
        <Link to='/advert/id'>
            <article className="advert-wrapper" /*onClick={handleClick}*/>
                <div className="advert-header">
                    <span className="adver-name">{name}</span>
                    <span className="adver-onsale">{sale}</span>
                </div>
                <div className="adver-body">
                    <span className="advert-photo">{photo}</span>
                </div>
                <div className="advert-footer">
                    <span className="adver-price">{price}€</span>
                    <span className="advert.tags">{tags}</span>
                </div>
            </article>
        </Link>
    );
};

export const advertType = {
    //user: PTypes.shape({ username: PTypes.string.isRequrired }).isRequired,
    name: PTypes.string.isRequired,
    sale: PTypes.bool.isRequired,
    price: PTypes.number.isRequired,
    tags: PTypes.arrayOf(PTypes.string),
};

export default Advert;