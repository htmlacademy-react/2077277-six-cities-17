import { createReducer } from '@reduxjs/toolkit';
import { ACTIVE_CITY, DEFAULT_SORT_TYPE } from '../const';
import { CitiesListType, OfferType, SortListType } from '../type';
import { changeCity, getOffersList, changeSortingType } from './action';

const initialState = {
  activeCity: ACTIVE_CITY as CitiesListType,
  offersList: [] as OfferType[],
  currentSortType: DEFAULT_SORT_TYPE as SortListType,
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
    });
});

export { reducer };
