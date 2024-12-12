import Map from '../../components/map/map';
import MainTitle from '../../components/main-title/main-title';
import Sorting from '../sorting/sorting';
import CardsList from '../cards-list/cards-list';
import { MainPage } from '../../const';
import { OfferType } from '../../type';
import { useState } from 'react';

type MainProps = {
  offers: OfferType[];
}

function Main({ offers }: MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<string | null>(null);

  const handleActiveOfferChange = (id: string | null) => {
    setActiveOffer(id);
  };

  return (
    <div className="cities__places-container container">
      <span className="visually-hidden">{activeOffer}</span>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <MainTitle citiesCount={offers.length} />
        <Sorting />
        <CardsList page={MainPage} offers={offers} onHandleActiveOfferChange ={handleActiveOfferChange}/>
      </section>
      <div className="cities__right-section">
        <Map />
      </div>
    </div>
  );
}

export default Main;
