import { createReducer } from '@reduxjs/toolkit';
import { ACTIVE_CITY } from '../const';
import { CitiesListType, OfferType } from '../type';
import { changeCity, getOffersList } from './action';

const initialState = {
  activeCity: ACTIVE_CITY as CitiesListType,
  offersList: [] as OfferType[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(getOffersList, (state, action) => {
      state.offersList = action.payload;
    });
});

export {reducer};
