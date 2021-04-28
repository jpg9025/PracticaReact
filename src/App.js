import AdvertsPage from './components/adverts/AdvertsPage/AdvertsPage.js';
import NewAdvertPage from './components/adverts/NewAdvertPage/NewAdvertPage.js';
import AdvertDetailPage from './components/adverts/AdvertDetailPage/AdvertDetailPage.js';
import LoginPage from './components/authentication/LoginPage/LoginPage.js';

function App() {
  return (
    <div className="App">
      <AdvertsPage></AdvertsPage>
      <NewAdvertPage></NewAdvertPage>
      <AdvertDetailPage></AdvertDetailPage>
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
