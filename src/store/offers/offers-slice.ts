import { OfferType } from '../../type';
import { NameSpace } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOffers, fetchNearbyOffers } from '../api-action';

type InitialStateType = {
  offersList: OfferType[];
  nearbyOffers: OfferType[];
  isLoadingOffers: boolean;
  isLoadingNearbyOffers: boolean;
  isErrorConnectionOffers: boolean;
};

const initialState: InitialStateType = {
  offersList: [],
  nearbyOffers: [],
  isLoadingOffers: false,
  isLoadingNearbyOffers: false,
  isErrorConnectionOffers: false,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setErrorConnectionStatusOffers(state, action: PayloadAction<boolean>) {
      state.isErrorConnectionOffers = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoadingOffers = true;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isLoadingOffers = false;
        state.isErrorConnectionOffers = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offersList = action.payload;
        state.isLoadingOffers = false;
        state.isErrorConnectionOffers = false;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.isLoadingNearbyOffers = true;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.isLoadingNearbyOffers = false;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        if (action.payload) {
          state.nearbyOffers = action.payload;
        }
        state.isLoadingNearbyOffers = false;
      });
  }
});

export const { setErrorConnectionStatusOffers } = offersSlice.actions;
