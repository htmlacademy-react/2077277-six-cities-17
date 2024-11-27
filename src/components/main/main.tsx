import Map from '../../components/map/map';
import MainTitle from '../../components/main-title/main-title';
import Card from '../../components/card/card';
import Sorting from '../sorting/sorting';
import { nanoid } from '@reduxjs/toolkit';
import { MainPage } from '../../const';

type MainProps = {
  cardsNumber: number;
}

function Main({ cardsNumber }: MainProps): JSX.Element {

  const cardsList = Array.from({length: cardsNumber}).map(() => <Card key={nanoid()} page = {MainPage}/>);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <MainTitle />
        <Sorting/>
        <div className="cities__places-list places__list tabs__content">
          {cardsList}
        </div>
      </section>
      <div className="cities__right-section">
        <Map />
      </div>
    </div>
  );
}

export default Main;
