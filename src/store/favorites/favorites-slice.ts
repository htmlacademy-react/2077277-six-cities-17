import { OfferType, StatusType, FullFavoriteOffer } from '../../type';
import { NameSpace, Status } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteOffers, changeFavoriteStatus } from '../api-action';

type InitialStateType = {
  favoriteOffers: (OfferType | FullFavoriteOffer)[];
  isFavoriteOffersLoading: boolean;
  uploadingFavoriteStatus: StatusType;
};

const initialState: InitialStateType = {
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
  uploadingFavoriteStatus: Status.Idle,
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
        state.uploadingFavoriteStatus = Status.Loading;
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.uploadingFavoriteStatus = Status.Error;
        state.uploadingFavoriteStatus = Status.Idle;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        state.uploadingFavoriteStatus = Status.Success;
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((item) => item.id !== action.payload.id);
        }
        state.uploadingFavoriteStatus = Status.Idle;
      });
  }
});
