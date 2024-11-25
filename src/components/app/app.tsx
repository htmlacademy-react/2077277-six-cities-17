// import MainPage from '../../pages/main-page/main-page';
// import Favorites from '../../pages/favorites/favorites';
import LoginPage from '../../pages/login-page/login-page';

type AppProps = {
  cardsNumber: number;
}

function App({cardsNumber} : AppProps): JSX.Element {
  return (
    // <MainPage cardsNumber = {cardsNumber} />
    // <Favorites/>
    <LoginPage/>
  );
}

export default App;
