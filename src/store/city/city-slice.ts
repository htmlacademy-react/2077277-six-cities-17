import {CitiesListType } from '../../type';
import { ACTIVE_CITY, NameSpace } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  activeCity: CitiesListType;
};

const initialState: InitialStateType = {
  activeCity: ACTIVE_CITY,
};

export const citySlice = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity (state, action: PayloadAction<CitiesListType>) {
      state.activeCity = action.payload;
    },
  },
});

export const {changeCity} = citySlice.actions;
