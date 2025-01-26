import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoritesMain from '../../components/favorites-main/favorites-main';
import { PageType } from '../../const';
import { LoginStatusList} from '../../type';
import styles from './style.module.css';
import { Helmet } from 'react-helmet-async';
import { selectFavoriteOffers } from '../../store/favorites/favorites-selectors';
import { useAppSelector } from '../../hooks';

type FavoritesPageProps = {
  loginStatus: LoginStatusList;
}

function FavoritesPage({ loginStatus }: FavoritesPageProps): JSX.Element {
  const favoritesOffers = useAppSelector(selectFavoriteOffers);
  const favoritesOffersLength = favoritesOffers.length;

  return (
    <div className={`page ${styles.container} ${!favoritesOffersLength ? 'page--favorites-empty' : ''}`}>
      <Helmet>
        <title>6 cities: {PageType.Favorites}</title>
      </Helmet>
      <Header loginStatus={loginStatus}/>
      <main className={`page__main page__main--favorites ${!favoritesOffersLength ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">

          {!favoritesOffersLength ? <FavoritesEmpty /> : <FavoritesMain />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
