import { SortListType, State, OfferType, CitiesListType, LoginStatusList } from '../type';

const selectSortListType = (state: State):SortListType => state.currentSortType;
const selectActiveCity = (state: State):CitiesListType => state.activeCity;
const selectOffersList = (state: State):OfferType[] => state.offersList;
const selectOffersLoadingStatus = (state: State):boolean => state.isLoading;
const selectLoginStatus = (state: State):LoginStatusList => state.authorizationStatus;
const selectError = (state: State): string | null => state.error;

export {selectSortListType, selectActiveCity, selectOffersList, selectOffersLoadingStatus, selectError, selectLoginStatus};
