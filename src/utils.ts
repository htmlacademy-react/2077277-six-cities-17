import dayjs from 'dayjs';
import { OfferType } from './type';

function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function getHumanizeDate(date: string, format: string): string {
  return date ? dayjs(date).format(format) : '';
}

function getSlicedNearOffersWithCurrentOffer(offersNearby:OfferType[], currentOffer:OfferType | undefined) {
  if (currentOffer) {
    return offersNearby.concat([currentOffer]) ;
  } return offersNearby;
}

export { capitalizeFirstLetter, getHumanizeDate, getSlicedNearOffersWithCurrentOffer };
