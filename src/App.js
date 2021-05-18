import React from 'react';
import PTypes from 'prop-types';
import { Redirect, Switch, Route } from 'react-router';

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
        <Route path="/advert/:id" render={() => <AdvertDetailPage isLogged={isLogged} onLogout={handleLogout} />} />
        <Route  path="/advert/new" render={() => <NewAdvertPage isLogged={isLogged} onLogout={handleLogout}/>} />
        <Route  path="/login" render={() => <LoginPage onLogin={handleLogin} onLogout={handleLogout} />} />
        <Route  exact path="/" render={() => <AdvertsPage isLogged={isLogged} onLogout={handleLogout} />} />
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
