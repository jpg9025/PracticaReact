import React from 'react';
import classnames from 'classnames';

import { ReactComponent as Icon } from '../../../assets/raccoon.svg';
import './Header.css';
import Button from '../../sharedComponents/Button.js';
import AuthButton from '../../sharedComponents/AuthButton.js';

const Header = ({ className, isLogged, onLogout, ...props }) => {
    return (
        <header className={classnames('header', className)} {...props}>
            <div className="header-logo">
                <Icon width="40" height="40"/>
            </div>
            <nav className="header-nav">
                <Button
                to ="/advert"
                variant="primary"
                className="header-button"
                > 
                    New Advert
                </Button>
                <AuthButton 
                className="header-button"
                link={"/login"}
                isLogged={isLogged}
                onLogout={onLogout} />
            </nav>
        </header>
    );
};

export default Header;