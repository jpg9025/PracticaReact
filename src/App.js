import React from 'react';
import PTypes from 'prop-types';
import { Redirect, Switch, Route } from 'react-router';
import { AuthContextProvider } from './components/authentication/context.js';
import PrivateRoute from './components/sharedComponents/PrivateRoute.js';

import AdvertsPage from './components/adverts/AdvertsPage/AdvertsPage.js';
import NewAdvertPage from './components/adverts/NewAdvertPage/NewAdvertPage.js';
import AdvertDetailPage from './components/adverts/AdvertDetailPage/AdvertDetailPage.js';
import LoginPage from './components/authentication/LoginPage/LoginPage.js';

function App({ isInitiallyLogged }) {

  // State definition. Two states, logged or notLogged => Boolean
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  // Handler of the event onLogin
  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  }

  // The context that will be shared by AuthContext.Provider must be gived to AuthContextProvider throw value prop
  const AuthContext = { isLogged, onLogout: handleLogout, onLogin: handleLogin };

  return (
    <div className="App">
      <AuthContextProvider value={AuthContext}>
        <Switch>

          <PrivateRoute path="/adverts/:id" isLogged={isLogged} /*component={AdvertDetailPage}*/>
            {({match}) => <AdvertDetailPage match={match} />}
            {/*<AdvertDetailPage isLogged={isLogged} onLogout={handleLogout} />*/}
          </PrivateRoute> 

          <PrivateRoute exact path="/advert/new" isLogged={isLogged}  /*component={NewAdvertPage}*/>
            {({history}) => <NewAdvertPage history={history} />}
          </PrivateRoute>

          <Route  path="/login">
            {({history, location}) => <LoginPage onLogin={handleLogin} history={history} location={location} /> }
            {/*  using history and redirectinf to home is better, more programatically than using the conditioning
            ({history}) => !isLogged ? <LoginPage onLogin={handleLogin} history={history}/> : <Redirect to='/'/>*/}
          </Route>

          <PrivateRoute  exact path="/" isLogged={isLogged}>
            {({history}) => <AdvertsPage history={history} />}
          </PrivateRoute>

          <Route  path="/404">
            <div
              style={{
                textAlign: 'center',
                fontSize: 52,
                fontWeight: 'bold',
                color: 'darkred',
              }}>
                404 | Page not found 
              </div>
          </Route >

          <Route >
            <Redirect to="/404"/>
          </Route >

        </Switch>
      </AuthContextProvider>
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: PTypes.bool.isRequired,
};
   
export default App;
