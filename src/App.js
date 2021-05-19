import React from 'react';
import PTypes from 'prop-types';
import { Redirect, Switch, Route } from 'react-router';
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

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/advert/:id" isLogged={isLogged} component={AdvertDetailPage}>
          <AdvertDetailPage isLogged={isLogged} onLogout={handleLogout} />
        </PrivateRoute> 
        <PrivateRoute exact path="/advert/new" isLogged={isLogged} component={NewAdvertPage}>
          <NewAdvertPage isLogged={isLogged} onLogout={handleLogout} />
        </PrivateRoute>
        <Route  path="/login">
          {({history}) => <LoginPage onLogin={handleLogin} history={history}/>}
          {/*  using history and redirectinf to home is better, more programatically
          ({history}) => !isLogged ? <LoginPage onLogin={handleLogin} history={history}/> : <Redirect to='/'/>*/}
        </Route>
        <PrivateRoute  exact path="/" isLogged={isLogged} render={() => <AdvertsPage isLogged={isLogged} onLogout={handleLogout} />} />
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

      {/*{isLogged ? (
      <AdvertsPage isLogged={isLogged} onLogout={handleLogout}/>
      ) : (
      <LoginPage onLogin={handleLogin}/>
      )}
      <AdvertsPage isLogged={isLogged} onLogout={handleLogout}></AdvertsPage>
      <NewAdvertPage isLogged={isLogged} onLogout={handleLogout}></NewAdvertPage>
      <AdvertDetailPage isLogged={isLogged} onLogout={handleLogout}></AdvertDetailPage>*/}
    </div>
  );
}

App.propTypes = {
  isInitialltyLogged: PTypes.bool.isRequired,
}
export default App;
