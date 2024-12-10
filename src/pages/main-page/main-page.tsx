import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main-empty/main-empty';
import { PageType } from '../../const';
import { LoginStatusList, OfferType } from '../../type';
import { Helmet } from 'react-helmet-async';

type MainPageProps = {
  loginStatus: LoginStatusList;
  offers: OfferType[];
}

function MainPage({ loginStatus, offers }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities: {PageType.Main}</title>
      </Helmet>

      <Header isMainPage loginStatus={loginStatus} />
      <CitiesList />

      <main className={`page__main page__main--index ${!offers.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">

          {!offers.length ? <MainEmpty /> : <Main offers={offers} />}

        </div>
      </main>
    </div>
  );
}

export default MainPage;
