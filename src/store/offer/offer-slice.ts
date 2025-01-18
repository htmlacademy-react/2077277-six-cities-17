import { OneOfferType } from '../../type';
import { NameSpace } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getOfferInfoById } from '../api-action';

type InitialStateType = {
  offer: OneOfferType | null;
  isLoadingOffer: boolean;
  isErrorConnection: boolean;
};

const initialState: InitialStateType = {
  offer: null,
  isLoadingOffer: false,
  isErrorConnection: false,
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    setErrorConnectionStatus(state, action: PayloadAction<boolean>) {
      state.isErrorConnection = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getOfferInfoById.pending, (state) => {
        state.isLoadingOffer = true;
      })
      .addCase(getOfferInfoById.rejected, (state) => {
        state.isLoadingOffer = false;
        state.isErrorConnection = false;
      })
      .addCase(getOfferInfoById.fulfilled, (state, action) => {
        if (action.payload) {
          state.offer = action.payload;
        }
        state.isLoadingOffer = false;
      });
  }
});

export const {setErrorConnectionStatus} = offerSlice.actions;
