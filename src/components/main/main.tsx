import Map from '../../components/map/map';
import MainTitle from '../../components/main-title/main-title';
import Sorting from '../sorting/sorting';
import CardsList from '../cards-list/cards-list';
import { MainPage } from '../../const';
import { OfferType, CitiesListType } from '../../type';
import { useState } from 'react';

type MainProps = {
  offers: OfferType[];
  activeCity: CitiesListType;
}

function Main({ offers, activeCity }: MainProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleActiveOfferChange = (id: string | null) => {
    setActiveOfferId(id);
  };

  return (
    <div className="cities__places-container container">
      <span className="visually-hidden">{activeOfferId}</span>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <MainTitle citiesCount={offers.length} />
        <Sorting />
        <CardsList page={MainPage} offers={offers} onHandleActiveOfferChange ={handleActiveOfferChange} activeCity={activeCity}/>
      </section>
      <div className="cities__right-section">
        <Map activeCity={offers[0].city} offers={offers} selectedOfferId={activeOfferId}/>
      </div>
    </div>
  );
}

export default Main;
