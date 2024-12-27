import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main-empty/main-empty';
import { PageType } from '../../const';
import { LoginStatusList } from '../../type';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getOffersList } from '../../store/action';
import { store } from '../../store';
import OFFERS from '../../mocks/offers';

type MainPageProps = {
  loginStatus: LoginStatusList;
}

store.dispatch(getOffersList(OFFERS));

function MainPage({ loginStatus }: MainPageProps): JSX.Element {

  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offersList);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities: {PageType.Main}</title>
      </Helmet>

      <Header isMainPage loginStatus={loginStatus} />
      <CitiesList activeCity={activeCity} />

      <main className={`page__main page__main--index ${!filteredOffers.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">

          {!filteredOffers.length ? <MainEmpty activeCity={activeCity} /> : <Main offers={offers} activeCity={activeCity} filteredOffers={filteredOffers} />}

        </div>
      </main>
    </div>
  );
}

export default MainPage;
