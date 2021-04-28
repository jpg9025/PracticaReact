import AdvertsPage from './components/adverts/AdvertsPage/AdvertsPage.js';
import NewAdvertPage from './components/adverts/NewAdvertPage/NewAdvertPage.js';
import AdvertDetailPage from './components/adverts/AdvertDetailPage/AdvertDetailPage.js';
import LoginPage from './components/authentication/LoginPage/LoginPage.js';

function App() {
  return (
    <div className="App">
      <LoginPage></LoginPage>
      <AdvertsPage></AdvertsPage>
      <NewAdvertPage></NewAdvertPage>
      <AdvertDetailPage></AdvertDetailPage>
    </div>
  );
}

export default App;
