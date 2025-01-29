import CardMemo from '../../components/card/card';
import { useAppSelector } from '../../hooks';
import { OfferType, PageParamsType } from '../../type';
import { sortOffers } from '../../utils';
import { selectSortListType } from '../../store/sorting/sorting-selectors';
import { memo, useMemo } from 'react';

type CardsList = {
  filteredOffers: OfferType[];
  page: PageParamsType;
  onHandleActiveOfferChange: (id: string | null) => void;
}

function CardsList({ filteredOffers, page, onHandleActiveOfferChange }: CardsList): JSX.Element {
  const currentSortType = useAppSelector(selectSortListType);
  const sortedOffers = useMemo(() => sortOffers(filteredOffers, currentSortType), [currentSortType, filteredOffers]);

  const cardsList = sortedOffers.map((offer) => <CardMemo key={offer.id} id={offer.id} isFavorite={offer.isFavorite} title={offer.title} type={offer.type} price={offer.price} previewImage={offer.previewImage} rating={offer.rating} isPremium={offer.isPremium} page={page} onHandleActiveOfferChange={onHandleActiveOfferChange}/>);

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList}
    </div>
  );
}

const CardsListMemo = memo(CardsList);

export default CardsListMemo;
