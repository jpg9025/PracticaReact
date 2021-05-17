import React from 'react';
import PTypes from 'prop-types';
import { Redirect, Switch } from 'react-router';

import AdvertsPage from './components/adverts/AdvertsPage/AdvertsPage.js';
import NewAdvertPage from './components/adverts/NewAdvertPage/NewAdvertPage.js';
import AdvertDetailPage from './components/adverts/AdvertDetailPage/AdvertDetailPage.js';
import LoginPage from './components/authentication/LoginPage/LoginPage.js';
import { BrowserRouter } from 'react-router-dom';

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
        <BrowserRouter path="/advert/:advertId" component={AdvertDetailPage} />
        <BrowserRouter path="/advert" component={NewAdvertPage} />
        <BrowserRouter path="/login" component={LoginPage} />
        <BrowserRouter exact path="/" component={AdvertsPage} />
        <BrowserRouter path="/404">
          <div
            style={{
              textAlign: 'center',
              fontSize: 52,
              fontWeight: 'bold',
              color: 'red',
            }}>
              404 | Page not found 
            </div>
        </BrowserRouter>
        <BrowserRouter>
          <Redirect to="/404" />
        </BrowserRouter>
      </Switch>

      {isLogged ? (
      <AdvertsPage isLogged={isLogged} onLogout={handleLogout}/>
      ) : (
      <LoginPage onLogin={handleLogin}/>
      )}
      {/*<AdvertsPage></AdvertsPage>
      <NewAdvertPage></NewAdvertPage>
      <AdvertDetailPage></AdvertDetailPage>*/}
    </div>
  );
}

App.propTypes = {
  isInitialltyLogged: PTypes.bool.isRequired,
}
export default App;
