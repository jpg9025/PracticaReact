import { Link } from "react-router-dom"
import PTypes from 'prop-types';
import Button from './Button.js';
import { logout } from '../../API/authentication.js';

const AuthButton = ({className, isLogged, onLogout, link }) => {
    const handleLogoutClick = () => {
        logout().then(onLogout);
    };

    const props = isLogged ? { onClick: handleLogoutClick, children: 'Log out' } : { children: 'Log in'};

    return <Button><Link to ={link} className={className} {...props} /></Button>
};

AuthButton.PTypes = {
    className: PTypes.string,
    isLogged: PTypes.bool,
    onLogout: PTypes.bool.isRequired,
};

AuthButton.defaultProps = {
    isLogged: false,
};

export default AuthButton;
