import React from 'react';
import classnames from 'classnames';

import { ReactComponent as Icon } from '../../../assets/raccoon.svg';
import './Header.css';
import Button from '../../sharedComponents/Button.js';

const Header = ({ className, isLogged, ...props }) => {
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
                { isLogged ? (
                    <Button 
                    className="header-button">
                        Log out
                    </Button>
                ) : (
                    <Button
                    to="/login"
                    className="header-button">
                        Log in
                    </Button>
                )}
            </nav>
        </header>
    );
};

export default Header;