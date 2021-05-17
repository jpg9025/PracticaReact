import React from 'react';
import LoginForm from '../LoginForm/LoginForm.js';

import { login } from '../../../API/authentication.js';

function LoginPage({ onLogin }) {
    // Create a state to handle the error - if we want to show an error on screen its require a state
    const [error, setError] = React.useState({message: 'Insert valid credentials'});

    // Create a state to handle the loading state - to show a loading on screen its require a state
    const [ isLoading, setIsLoading ] = React.useState(false);

    const handleSubmit = async credentials => {
        // login(credentials).then(() => onLogin()); // login returns a promise 
        try {
            setIsLoading(true);
            await login(credentials);
            onLogin();
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
        
    };

    return (
        <div className="loginPage">
            <h1 className="loginPage-title">Log in to {process.env.REACT_APP_TITLE}</h1>
            <LoginForm onSubmit={handleSubmit} isLoading={isLoading}/>
            {error && <div class="Login-error">{error.message}</div>}
            {isLoading && <div class="Loading">...Loading</div>}
        </div>
    );
}

export default LoginPage;