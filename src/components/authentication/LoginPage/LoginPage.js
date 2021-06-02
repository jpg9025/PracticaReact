import React from 'react';
import PTypes from 'prop-types';
import LoginForm from '../LoginForm/LoginForm.js';

import { login } from '../../../API/authentication.js';
import {AuthContextConsumer} from '../../authentication/context.js';

import './LoginPage.css';

const LoginPage = ({ onLogin, history, location }) => {
    // Create a state to handle the error - if we want to show an error on screen its require a state
    const [error, setError] = React.useState({message: 'Insert valid credentials'});

    // Create a state to handle the loading state - to show a loading on screen its require a state
    const [ isLoading, setIsLoading ] = React.useState(false);

    const isLogged = React.useRef(false);

    React.useEffect(() => {
        if(isLogged.current) {
            onLogin();
            const { from } = location.state || { from: { pathname:'/'}};
            history.replace(from);
        }
    }, [isLogged.current, onLogin]);

    const resetError = () => setError(null);

    const handleSubmit = async credentials => {
        // login(credentials).then(() => onLogin()); // login returns a promise 
        resetError();
        setIsLoading(true);
        try {
            await login(credentials);
            isLogged.current = true;
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="LoginPage">
            <h1 className="LoginPage-title">Log in to {process.env.REACT_APP_TITLE}</h1>
            <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
            {error && <div className="Login-Error">{error.message}</div>}
            {isLoading && <div className="Loading">...Loading</div>}
        </div>
    );
}

const ConnectedLoginPage = (props) => {
    return <AuthContextConsumer>
        {(value)=> {return <LoginPage 
        isLogged={value.isLogged} 
        onLogout={value.onLogout} 
        onLogin={value.onLogin} 
        {...props} />}} 
    </AuthContextConsumer>;
};

LoginPage.propTypes = {
    onLogin: PTypes.func.isRequired,
    history: PTypes.shape({replace: PTypes.func.isRequired}).isRequired,
    location: PTypes.object.isRequired
};

export default ConnectedLoginPage;