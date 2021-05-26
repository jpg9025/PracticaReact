import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../../components/authentication/context.js';

const PrivateRoute = props => {

    const{ isLogged }= React.useContext(AuthContext);
    return isLogged ? <Route {...props} /> : <Redirect to="/login" />
};

/* const PrivateRoute = ({ isLogged, ...props }) => {
    const toureProps = isLogged ? props : {
        children: ({ location }) => <Redirect to={{ pathname: '/login', state: { from: location }}} />)};
    };
    return <Route {.. routeProps} />;
}*/

export default PrivateRoute;