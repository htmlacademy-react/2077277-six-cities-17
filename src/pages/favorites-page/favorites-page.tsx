import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesMain from '../../components/favorites-main/favorites-main';
import { PageType } from '../../const';
import { LoginStatusList, OfferType } from '../../type';
import styles from './style.module.css';
import { Helmet } from 'react-helmet-async';

type FavoritesPageProps = {
  loginStatus: LoginStatusList;
  favorites: OfferType[];
}

function FavoritesPage({ loginStatus, favorites }: FavoritesPageProps): JSX.Element {

  return (
    <div className={`page ${styles.container} ${!favorites.length ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: {PageType.Favorites}</title>
      </Helmet>
      <Header loginStatus={loginStatus} />
      <main className={`page__main page__main--favorites ${!favorites.length ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">

          {!favorites.length ? <FavoritesEmpty /> : <FavoritesMain favorites={favorites} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
