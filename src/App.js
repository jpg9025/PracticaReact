import React from 'react';
import PTypes from 'prop-types';

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
