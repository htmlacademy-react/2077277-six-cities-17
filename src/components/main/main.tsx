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
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  const handleActiveOfferChange = (id: string | null) => {
    setActiveOfferId(id);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <MainTitle citiesCount={filteredOffers.length} activeCity={activeCity}/>
        <Sorting />
        <CardsList page={MainPage} filteredOffers={filteredOffers} onHandleActiveOfferChange ={handleActiveOfferChange}/>
      </section>
      <div className="cities__right-section">
        <Map activeCity={activeCity} offers={offers} selectedOfferId={activeOfferId}/>
      </div>
    </div>
  );
}

export default Main;
