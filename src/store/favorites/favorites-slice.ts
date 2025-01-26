import { OfferType } from '../../type';
import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteOffers, changeFavoriteStatus } from '../api-action';

type InitialStateType = {
  favoriteOffers: OfferType[];
  isLoadingFavoriteStatus: boolean;
};

const initialState: InitialStateType = {
  favoriteOffers: [],
  isLoadingFavoriteStatus: false,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.isLoadingFavoriteStatus = true;
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.isLoadingFavoriteStatus = false;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          const favoriteOfferIndex = state.favoriteOffers.findIndex((card) => card.id === action.payload.id);
          state.favoriteOffers.splice(favoriteOfferIndex, 1);
        }
        state.isLoadingFavoriteStatus = false;
      });
  }
});
