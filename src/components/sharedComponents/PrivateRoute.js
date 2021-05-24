import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ isLogged, ...props }) => {
    return isLogged ? <Route {...props} /> : <Redirect to="/login" />
};

/* const PrivateRoute = ({ isLogged, ...props }) => {
    const toureProps = isLogged ? props : {
        children: ({ location }) => <Redirect to={{ pathname: '/login', state: { from: location }}} />)};
    };
    return <Route {.. routeProps} />;
}*/

export default PrivateRoute;