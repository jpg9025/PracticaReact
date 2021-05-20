import React from 'react';
import PTypes from 'prop-types';

import './Advert.css';

const Advert = ({ id, name, sale, price, tags, photo, history, /*onClick,*/ ...props }) => {
    const handleClick = () => {
        history.push(`/adverts/${id}`);
    };

    return (
        <article className="advert-wrapper" onClick={handleClick}>
            <div className="advert-header">
                <span className="adver-name">{name}</span>
                <span className="adver-onsale">On sale:{sale ? 'yes' : 'no'}</span>
            </div>
            <div className="adver-body">
                <span className="advert-photo">{photo}</span>
            </div>
            <div className="advert-footer">
                <span className="adver-price">{price}€</span>
                <span className="advert-tags">{tags}</span>
            </div>
        </article>
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