// import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';

type AppProps = {
  cardsNumber: number;
}

function App({cardsNumber} : AppProps): JSX.Element {
  return (
    // <MainPage cardsNumber = {cardsNumber} />
    <Favorites/>
  );
}

export default App;
