import { SortListType, State, OfferType, CitiesListType, LoginStatusList, OneOfferType, ReviewsType } from '../type';

const selectSortListType = (state: State):SortListType => state.currentSortType;
const selectActiveCity = (state: State):CitiesListType => state.activeCity;
const selectOffersList = (state: State):OfferType[] => state.offersList;
const selectOffer = (state: State):OneOfferType | null => state.offer;
const selectNearbyOffers = (state: State):OfferType[] => state.nearbyOffers;
const selectOffersComments = (state: State):ReviewsType[] => state.offerComments;
const selectOffersLoadingStatus = (state: State):boolean => state.isLoading;
const selectOfferLoadingStatus = (state: State):boolean => state.isLoadingOffer;
const selectNearbyOffersStatus = (state: State):boolean => state.isLoadingNearbyOffers;
const selectCommentsOffersStatus = (state: State):boolean => state.isLoadingOffersComments;
const selectLoginStatus = (state: State):LoginStatusList => state.authorizationStatus;
const selectError = (state: State): string | null => state.error;

export {selectSortListType, selectActiveCity, selectOffersList, selectOffersLoadingStatus, selectError, selectLoginStatus, selectOffer, selectOfferLoadingStatus, selectNearbyOffersStatus, selectNearbyOffers, selectOffersComments, selectCommentsOffersStatus};
