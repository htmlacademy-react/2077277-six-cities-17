import { createReducer } from '@reduxjs/toolkit';
import { ACTIVE_CITY, DEFAULT_SORT_TYPE } from '../const';
import { CitiesListType, OfferType, SortListType } from '../type';
import { changeCity, getOffersList, changeSortingType } from './action';
import { setError } from './action';

const initialState = {
  activeCity: ACTIVE_CITY as CitiesListType,
  offersList: [] as OfferType[],
  currentSortType: DEFAULT_SORT_TYPE as SortListType,
  isLoading: false as boolean,
  error: null as string | null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getOffersList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(changeSortingType, (state, action) => {
      state.currentSortType = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
