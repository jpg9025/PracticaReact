import React from 'react';

import Button from '../../sharedComponents/Button.js';
import FormField from '../../sharedComponents/FormField.js';

function LoginForm() {
    return (
        <form classname='loginForm'>
            <FormField
            type="text"
            name="username"
            label="username or name"
            className="loginForm-field"
            />
            <FormField
            type="password"
            name="password"
            label="password"
            className="loginForm-field"
            />
            <Button type="submit" className="loginForm-submit" variant="primary">
                Log in
            </Button>
        </form>
    );
};

export default LoginForm;