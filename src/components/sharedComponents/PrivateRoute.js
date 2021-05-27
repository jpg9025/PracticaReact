import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../../components/authentication/context.js';

const PrivateRoute = props => {

    const{ isLogged }= React.useContext(AuthContext);
    return isLogged ? <Route {...props} /> : <Redirect to="/login" />
};

export default PrivateRoute;