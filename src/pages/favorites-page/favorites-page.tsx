import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesMain from '../../components/favorites-main/favorites-main';
import { FavoritesCity } from '../../const';

function FavoritesPage(): JSX.Element {

  function isFavorites (city: [string, boolean]): boolean {
    return city[1];
  }
  const isFavoritesCity = Object.entries(FavoritesCity).some(isFavorites);

  return (
    <div className={`page ${!isFavoritesCity ? 'page--favorites-empty' : ''}`}>
      <Header isLoggedIn/>
      <main className={`page__main page__main--favorites ${!isFavoritesCity ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">

          {!isFavoritesCity ? <FavoritesEmpty /> : <FavoritesMain favoritesCity={FavoritesCity} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
