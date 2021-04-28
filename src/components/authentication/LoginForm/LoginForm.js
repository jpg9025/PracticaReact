import React from 'react';

import Button from '../../sharedComponents/Button.js';
import FormField from '../../sharedComponents/FormField.js';

function LoginForm({ onSubmit }) {
    const [credentials, setCredentials ] = React.useState({mail: '', password: ''});
    
    /*const handleMailChange = event => {
        const newCredentials = {...credentials, mail: event.target.value };
        setCredentials(newCredentials);
        console.log(event.target.value);
    };

    const handlePasswordChange = event => {
        const newCredentials = { ...credentials, password: event.target.value };
        setCredentials(newCredentials);
    };*/

    const handleChange = event => {
        const newCredentials = { ...credentials, [event.target.name]: event.target.value };
        setCredentials(newCredentials);
    };

    const handleSubmit = event => {
        onSubmit(credentials);
        event.preventDefault();
    }

    const { password, email } = credentials;

    return (
        <form className='loginForm' onSubmit={handleSubmit}>
            <FormField
            type="email"
            name="email"
            label="email"
            className="loginForm-field"
            value={email}
            //onChange={handleMailChange}
            onChange={handleChange}
            />
            <FormField
            type="password"
            name="password"
            label="password"
            className="loginForm-field"
            value={password}
            //onChange={handlePasswordChange}
            onChange={handleChange}
            />
            <Button 
            type="submit" 
            className="loginForm-submit" 
            variant="primary"
            disabled={!email || !password}
            >
                Log in
            </Button>
        </form>
    );
};

export default LoginForm;