import dayjs from 'dayjs';
import { OfferType, SortListType, ReviewsType } from './type';
import { SortType } from './const';
import { useParams } from 'react-router-dom';

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getHumanizeDate(date: string, format: string): string {
  return date ? dayjs(date).format(format) : '';
}

function getReviewsByDate(firstReviewDate: ReviewsType, secondReviewDate: ReviewsType) {
  return dayjs(secondReviewDate.date).diff(dayjs(firstReviewDate.date));
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

const useUrlId = (): string | null => {
  const { offerId } = useParams();
  return offerId ?? null;
};

export { capitalizeFirstLetter, getHumanizeDate, getSlicedNearOffersWithCurrentOffer, sortOffers, getReviewsByDate, useUrlId };
