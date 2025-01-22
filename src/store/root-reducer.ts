import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { citySlice } from './city/city-slice';
import { sortingSlice } from './sorting/sorting-slice';
import userSlice from './user/user-slice';
import { errorSlice } from './error/error-slice';
import { offersSlice } from './offers/offers-slice';
import { offerSlice } from './offer/offer-slice';
import commentsSlice from './comments/comments-slice';
import { favoritesSlice } from './favorites/favorites-slice';

const rootReducer = combineReducers({
  [NameSpace.City]: citySlice.reducer,
  [NameSpace.Sorting]: sortingSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Error]: errorSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer,
  [NameSpace.Favorite]: favoritesSlice.reducer,
});

export default rootReducer;
