import React from 'react';

import PTypes from 'prop-types';
import Button from '../../sharedComponents/Button.js';
import FormField from '../../sharedComponents/FormField.js';

import './LoginForm.css';


function LoginForm({ onSubmit, isLoading }) {
    const [credentials, setCredentials ] = React.useState({ email: '', password: '', remember:true });
    
    /*const handleMailChange = event => {
        const newCredentials = {...credentials, mail: event.target.value };
        setCredentials(newCredentials);
        //console.log(event.target.value);
    };

    const handlePasswordChange = event => {
        const newCredentials = { ...credentials, password: event.target.value };
        setCredentials(newCredentials);
    };*/

    const handleChange = event => {
        const newCredentials = { ...credentials, [event.target.name]: event.target.value};
        setCredentials(newCredentials);
        // New State depends on previous state => Is better use a function that receive an state and create a new state depending on the previous
        // New State does not depend on previous state => set state with a value directly
        //setCredentials(oldCredentials => ({
        //    ...oldCredentials, [event.target.name]: event.target.value
        //}));
    };

    const handleRemember = event => {
        console.log(event.target.checked);
        const newCredentials = {...credentials, remember: event.target.checked};
        setCredentials(newCredentials);
        ;
    };

    const handleSubmit = event => {
        onSubmit(credentials);
        event.preventDefault();
    };


    const { password, email, remember } = credentials; // destructuring credentials object

    return (
        <form className='loginForm' onSubmit={handleSubmit}>
            <FormField
            type="email"
            name="email"
            label="Email:"
            className="loginForm-field"
            //value={credentials.email}
            value={email}
            //onChange={handleMailChange}
            onChange={handleChange}
            />
            <FormField
            type="password"
            name="password"
            label="Password:"
            className="loginForm-field"
            //value={credentials.password}
            value={password}
            //onChange={handlePasswordChange}
            onChange={handleChange}
            />
            <label htmlFor="remember">Remember credentials?</label>
            <input
            type='checkbox' 
            className="loginForm-rememenberuser"
            name="remember"
            value={remember}
            checked={remember}
            onChange={handleRemember}
            //onChange={handleChange}
            />
            <Button 
            type="submit" 
            className="loginForm-submit" 
            disabled={isLoading ||(!email || !password)}
            >
                Log in
            </Button>
        </form>
    );
};

LoginForm.propTypes = {
    onSubmit: PTypes.func.isRequired,
    isLoading: PTypes.bool,
}

// Default props is required for props non required. To ensure that we receive a correct type of var
LoginForm.defaultProps = {
    isLoading: false,
}

export default LoginForm;