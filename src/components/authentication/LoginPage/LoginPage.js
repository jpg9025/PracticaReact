import React from 'react';
import LoginForm from '../LoginForm/LoginForm.js';

import { login } from '../../../API/authentication.js';

function LoginPage() {
    return (
        <div className="loginPage">
            <h1 className="loginPage-title">Log in to {process.env.REACT_APP_TITLE}</h1>
            <LoginForm onSubmit={login}/>
        </div>
    );
}

export default LoginPage;