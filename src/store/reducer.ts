import { createReducer } from '@reduxjs/toolkit';
import { ACTIVE_CITY, DEFAULT_SORT_TYPE, LoginStatus } from '../const';
import { CitiesListType, OfferType, SortListType, LoginStatusList } from '../type';
import { changeCity, changeSortingType } from './action';
import { setError } from './action';
import { fetchOffers } from './api-action';

const initialState = {
  activeCity: ACTIVE_CITY as CitiesListType,
  offersList: [] as OfferType[],
  currentSortType: DEFAULT_SORT_TYPE as SortListType,
  isLoading: false as boolean,
  authorizationStatus: LoginStatus.NoAuth as LoginStatusList,
  error: null as string | null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offersList = action.payload;
      state.isLoading = false;
    })
    .addCase(changeSortingType, (state, action) => {
      state.currentSortType = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
