import React from 'react';
import classnames from 'classnames';

import './Header.css';
import Button from '../../sharedComponents/Button.js';

const Header = ({ className, ...props }) => {
    return (
        <header className={classnames('header', className)} {...props}>
            <nav className="header-nav">
                <Button> New Advert</Button>
            </nav>
        </header>
    );
};

export default Header;