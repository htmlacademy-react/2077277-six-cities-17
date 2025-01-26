import { NameSpace } from '../../const';
import { State, OfferType } from '../../type';

const selectOffersList = (state: State):OfferType[] => state[NameSpace.Offers].offersList;
const selectNearbyOffers = (state: State):OfferType[] => state[NameSpace.Offers].nearbyOffers;
const selectOffersLoadingStatus = (state: State):boolean => state[NameSpace.Offers].isLoadingOffers;
const selectNearbyOffersStatus = (state: State):boolean => state[NameSpace.Offers].isLoadingNearbyOffers;
const selectErrorConnectionOffers = (state: State): boolean => state[NameSpace.Offers].isErrorConnectionOffers;

export {selectOffersList, selectNearbyOffers, selectOffersLoadingStatus, selectNearbyOffersStatus, selectErrorConnectionOffers};
