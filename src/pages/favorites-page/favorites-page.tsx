import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesMain from '../../components/favorites-main/favorites-main';
import { FavoritesCity, PageType } from '../../const';
import { LoginStatusList } from '../../type';
import { Helmet } from 'react-helmet-async';

type FavoritesPageProps = {
  loginStatus: LoginStatusList;
}

function FavoritesPage({ loginStatus }: FavoritesPageProps): JSX.Element {

  function isFavorites(city: [string, boolean]): boolean {
    return city[1];
  }

  const isFavoritesCity = Object.entries(FavoritesCity).some(isFavorites);

  return (
    <div className={`page ${!isFavoritesCity ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: {PageType.Favorites}</title>
      </Helmet>
      <Header loginStatus={loginStatus} />
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
