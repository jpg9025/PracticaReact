import React from 'react';
import Button from '../../sharedComponents/Button.js';
import { Link } from 'react-router-dom';

import './EmptyList.css';

const EmptyList = () => {
    return (
        <div className="EmptyList">
            <p>Any advert published, be the first doing it</p>
            <Button
                as={Link}
                to ="/advert/new"
            >
                New Advert
            </Button>
        </div>
    )
};

export default EmptyList;