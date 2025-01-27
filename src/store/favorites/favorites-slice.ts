import { OfferType } from '../../type';
import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteOffers, changeFavoriteStatus } from '../api-action';

type InitialStateType = {
  favoriteOffers: OfferType[];
  isFavoriteOffersLoading: boolean;
  isLoadingFavoriteStatus: boolean;
};

const initialState: InitialStateType = {
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
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
        state.isFavoriteOffersLoading = false;
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoriteOffersLoading = true;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isFavoriteOffersLoading = false;
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
