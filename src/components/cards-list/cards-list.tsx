import Card from '../../components/card/card';
import { OfferType, PageParamsType, CitiesListType } from '../../type';

type CardsList = {
  offers: OfferType[];
  page: PageParamsType;
  onHandleActiveOfferChange: (id: string | null) => void;
  activeCity: CitiesListType;
}

function CardsList({ offers, page, onHandleActiveOfferChange, activeCity }: CardsList): JSX.Element {
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  const cardsList = filteredOffers.map((offer) => <Card key={offer.id} id={offer.id} title={offer.title} type={offer.type} price={offer.price} previewImage={offer.previewImage} rating={offer.rating} isPremium={offer.isPremium} isFavorite={offer.isFavorite} page={page} onHandleActiveOfferChange={onHandleActiveOfferChange}/>);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList}
    </div>
  );
}

export default CardsList;
