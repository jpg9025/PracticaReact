import React from 'react';

import AdvertsPage from './components/adverts/AdvertsPage/AdvertsPage.js';
import NewAdvertPage from './components/adverts/NewAdvertPage/NewAdvertPage.js';
import AdvertDetailPage from './components/adverts/AdvertDetailPage/AdvertDetailPage.js';
import LoginPage from './components/authentication/LoginPage/LoginPage.js';

function App() {

  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  }

  return (
    <div className="App">
      {isLogged ? <AdvertsPage isLogged={isLogged}/> : <LoginPage onLogin={handleLogin}/>}
      {/*<AdvertsPage></AdvertsPage>
      <NewAdvertPage></NewAdvertPage>
      <AdvertDetailPage></AdvertDetailPage>*/}
    </div>
  );
}

export default App;
