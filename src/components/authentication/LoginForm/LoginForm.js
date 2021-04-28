import React from 'react';

import Button from '../../sharedComponents/Button.js';
import FormField from '../../sharedComponents/FormField.js';

function LoginForm() {
    const [credentials, setCredentials ] = React.useState({username: '', password: ''});
    
    /*const handleUsernameChange = event => {
        const newCredentials = {...credentials, username: event.target.value };
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

    return (
        <form className='loginForm'>
            <FormField
            type="text"
            name="username"
            label="username or name"
            className="loginForm-field"
            value={credentials.username}
            //onChange={handleUsernameChange}
            onChange={handleChange}
            />
            <FormField
            type="password"
            name="password"
            label="password"
            className="loginForm-field"
            value={credentials.password}
            //onChange={handlePasswordChange}
            onChange={handleChange}
            />
            <Button type="submit" className="loginForm-submit" variant="primary">
                Log in
            </Button>
        </form>
    );
};

export default LoginForm;