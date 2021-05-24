import React from 'react';
import classnames from 'classnames';

import { ReactComponent as Icon } from '../../../assets/raccoon.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import Button from '../../sharedComponents/Button.js';
import AuthButton from '../../sharedComponents/AuthButton.js';

const Header = ({ className, isLogged, onLogout, ...props }) => {
    return (
        <header className={classnames('header', className)} {...props}>
            <Link to='/'>
                <div className="header-logo">
                    <Icon width="40" height="40"/>
                </div>
            </Link>
            <nav className="header-nav">
                <Button
                as={Link}
                to ="/advert/new"
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