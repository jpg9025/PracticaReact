import React from 'react';
import LoginForm from '../LoginForm/LoginForm.js';

import { login } from '../../../API/authentication.js';

function LoginPage({ onLogin }) {

    const handleSubmit = async credentials => {
        // login(credentials).then(() => onLogin()); // login returns a promise 
        await login(credentials);
        onLogin();
    };

    return (
        <div className="loginPage">
            <h1 className="loginPage-title">Log in to {process.env.REACT_APP_TITLE}</h1>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default LoginPage;