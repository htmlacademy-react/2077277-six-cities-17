import { SortListType, State, OfferType, CitiesListType } from '../type';

const selectSortListType = (state: State):SortListType => state.currentSortType;
const selectActiveCity = (state: State):CitiesListType => state.activeCity;
const selectOffersList = (state: State):OfferType[] => state.offersList;

export {selectSortListType, selectActiveCity, selectOffersList};
