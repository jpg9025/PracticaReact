import React from 'react';
import Button from '../../sharedComponents/Button.js';

const EmptyList = () => {
    return (
        <div>
            <p>Any advert published, be the first doing it</p>
            <Button
                variant="primary"
            >
                New Advert
            </Button>
        </div>
    )
};

export default EmptyList;