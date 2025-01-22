import { OfferType } from '../../type';
import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoriteOffers, changeFavoriteStatus } from '../api-action';

type InitialStateType = {
  favoriteOffers: OfferType[];
  isLoadingFavoriteOffers: boolean;
  isLoadingFavoriteStatus: boolean;
  // isErrorConnectionOffers: boolean;
};

const initialState: InitialStateType = {
  favoriteOffers: [],
  isLoadingFavoriteOffers: false,
  isLoadingFavoriteStatus: false,
  // isErrorConnectionOffers: false,
};

export const favoritesSlice = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    // setErrorConnectionStatusOffers(state, action: PayloadAction<boolean>) {
    //   state.isErrorConnectionOffers = action.payload;
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isLoadingFavoriteOffers = true;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isLoadingFavoriteOffers = false;
        // state.isErrorConnectionOffers = true;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isLoadingFavoriteOffers = false;
        // state.isErrorConnectionOffers = false;
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

// export const {setErrorConnectionStatusOffers} = offersSlice.actions;
