import React from 'react';
import PTypes from 'prop-types';

import './Advert.css';

const Advert = ({ id, name, sale, price, tags, photo, history, /*onClick,*/ ...props }) => {
    const handleClick = () => {
        history.push(`/adverts/${id}`);
    };


    return (
        <div className="advert-wrapper">
            <article onClick={handleClick}>
                <div className="advert-header">
                    <span className="advert-name">{name}</span>
                    <span className="advert-onsale">On sale: {sale ? 'yes' : 'no'}</span>
                </div>
                <div className="adver-body">
                    <span className="advert-photo"><img src={`${process.env.REACT_APP_API_BASE_URL}${photo}`} alt={`${name}`} style={{width:"250px", height:"150px"}} /></span>
                </div>
                <div className="advert-footer">
                    <span className="advert-price">{price}€</span>
                    <span className="advert-tags">{tags}</span>
                </div>
            </article>
        </div>
        
        
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