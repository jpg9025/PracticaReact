import React from 'react';
import PTypes from 'prop-types';
import { deleteAdvert } from '../../../API/adverts.js';

import Button from '../../sharedComponents/Button.js';

import './Advert.css';

const Advert = ({ id, name, sale, price, tags, photo, history, /*onClick,*/ ...props }) => {
    const handleClick = () => {
        history.push(`/adverts/${id}`);
    };


    const handleDelete = () => {
        deleteAdvert(`${id}`).then(() => history.push('/'));
    };

    return (
        <div className="advert-wrapper">
            <article onClick={handleClick}>
                <div className="advert-header">
                    <span className="advert-name">{name}</span>
                    <span className="advert-onsale">On sale: {sale ? 'yes' : 'no'}</span>
                </div>
                <div className="adver-body">
                    <span className="advert-photo">{photo}</span>
                </div>
                <div className="advert-footer">
                    <span className="advert-price">{price}€</span>
                    <span className="advert-tags">{tags}</span>
                </div>
            </article>
            <Button
            onClick={handleDelete}
            >
                DeleteAdvert
            </Button>
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