import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main-empty/main-empty';
import { PageType, ACTIVE_CITY } from '../../const';
import { LoginStatusList, OfferType, CitiesListType } from '../../type';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

type MainPageProps = {
  loginStatus: LoginStatusList;
  offers: OfferType[];
}

function MainPage({ loginStatus, offers }: MainPageProps): JSX.Element {

  const [activeCity, setActiveCity] = useState<CitiesListType>(ACTIVE_CITY);

  const handleActiveCityChange = (city: CitiesListType): void => {
    if (city === activeCity) {
      return;
    }
    setActiveCity(city);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities: {PageType.Main}</title>
      </Helmet>

      <Header isMainPage loginStatus={loginStatus} />
      <CitiesList activeCity={activeCity} onActiveCityChange={handleActiveCityChange}/>

      <main className={`page__main page__main--index ${!offers.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">

          {!offers.length ? <MainEmpty /> : <Main offers={offers} activeCity={activeCity}/>}

        </div>
      </main>
    </div>
  );
}

export default MainPage;
