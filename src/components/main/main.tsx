import Map from '../../components/map/map';
import MainTitleMemo from '../../components/main-title/main-title';
import SortingMemo from '../sorting/sorting';
import CardsListMemo from '../cards-list/cards-list';
import { MainPage } from '../../const';
import { OfferType, CitiesListType } from '../../type';
import { useCallback, useState } from 'react';

type MainProps = {
  offers: OfferType[];
  activeCity: CitiesListType;
  filteredOffers: OfferType[];
}

function Main({ offers, activeCity, filteredOffers }: MainProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const filteredOffersLength = filteredOffers.length;
  const handleActiveOfferChange = useCallback((id: string | null) => setActiveOfferId(id), []);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <MainTitleMemo citiesCount={filteredOffersLength} activeCity={activeCity}/>
        <SortingMemo />
        <CardsListMemo page={MainPage} filteredOffers={filteredOffers} onHandleActiveOfferChange ={handleActiveOfferChange}/>
      </section>
      <div className="cities__right-section">
        <Map activeCity={activeCity} offers={offers} selectedOfferId={activeOfferId}/>
      </div>
    </div>
  );
}

export default Main;
