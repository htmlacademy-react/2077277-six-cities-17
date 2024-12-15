import Card from '../../components/card/card';
import { OfferType, PageParamsType } from '../../type';

type CardsList = {
  filteredOffers: OfferType[];
  page: PageParamsType;
  onHandleActiveOfferChange: (id: string | undefined) => void;
}

function CardsList({ filteredOffers, page, onHandleActiveOfferChange }: CardsList): JSX.Element {

  const cardsList = filteredOffers.map((offer) => <Card key={offer.id} id={offer.id} title={offer.title} type={offer.type} price={offer.price} previewImage={offer.previewImage} rating={offer.rating} isPremium={offer.isPremium} isFavorite={offer.isFavorite} page={page} onHandleActiveOfferChange={onHandleActiveOfferChange}/>);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList}
    </div>
  );
}

export default CardsList;
