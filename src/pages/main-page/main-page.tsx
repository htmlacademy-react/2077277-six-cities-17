import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main-empty/main-empty';
import { LoginStatusList } from '../../type';
import { PageType } from '../../const';
import { Helmet } from 'react-helmet-async';

type MainPageProps = {
  cardsNumber: number;
  loginStatus: LoginStatusList;
}

function MainPage({ cardsNumber, loginStatus }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities: {PageType.Main}</title>
      </Helmet>

      <Header isMainPage loginStatus={loginStatus} />
      <CitiesList />

      <main className={`page__main page__main--index ${!cardsNumber ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">

          {!cardsNumber ? <MainEmpty /> : <Main cardsNumber={cardsNumber} />}

        </div>
      </main>
    </div>
  );
}

export default MainPage;
