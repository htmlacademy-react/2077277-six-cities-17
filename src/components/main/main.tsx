import Map from '../../components/map/map';
import MainTitle from '../../components/main-title/main-title';
import Card from '../../components/card/card';
import Sorting from '../sorting/sorting';
import { MainPage } from '../../const';
import { OfferType } from '../../type';

type MainProps = {
  offers: OfferType[];
}

function Main({ offers }: MainProps): JSX.Element {

  const cardsList = offers.map((offer) => <Card key={offer.id} title={offer.title} type={offer.type} price={offer.price} previewImage={offer.previewImage} rating={offer.rating} isPremium={offer.isPremium} isFavorite={offer.isFavorite} page={MainPage} />);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <MainTitle citiesCount={offers.length} />
        <Sorting />
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
