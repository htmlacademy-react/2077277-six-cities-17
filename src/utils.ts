import dayjs from 'dayjs';
import { OfferType, SortListType } from './type';
import { SortType } from './const';

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getHumanizeDate(date: string, format: string): string {
  return date ? dayjs(date).format(format) : '';
}

function getSlicedNearOffersWithCurrentOffer(offersNearby: OfferType[], currentOffer: OfferType | undefined) {
  if (currentOffer) {
    return offersNearby.concat([currentOffer]);
  } return offersNearby;
}

const sortBy = {
  [SortType.Popular]: (offers: OfferType[]):OfferType[] => [...offers],
  [SortType.PriceLow]: (offers: OfferType[]):OfferType[] => offers.toSorted((firstOffer, secondOffer) => firstOffer.price - secondOffer.price),
  [SortType.PriceHigh]: (offers: OfferType[]):OfferType[] => offers.toSorted((firstOffer, secondOffer) => secondOffer.price - firstOffer.price),
  [SortType.Rating]: (offers: OfferType[]):OfferType[] => offers.toSorted((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating),
};

const sortOffers = (offers: OfferType[], sortType: SortListType):OfferType[] => sortBy[sortType](offers);

export { capitalizeFirstLetter, getHumanizeDate, getSlicedNearOffersWithCurrentOffer, sortOffers };
