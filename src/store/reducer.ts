import { createReducer } from '@reduxjs/toolkit';
import { ACTIVE_CITY, DEFAULT_SORT_TYPE, LoginStatus } from '../const';
import { CitiesListType, OfferType, SortListType, LoginStatusList, UserData, OneOfferType, ReviewsType } from '../type';
import { changeCity, changeSortingType, setError, setErrorConnectionStatus } from './action';
import { checkAuthStatus, fetchOffers, loginAction, logoutAction, getOfferInfoById, fetchNearbyOffers, fetchOfferComments, postOfferComment } from './api-action';

type InitialStateType = {
  activeCity: CitiesListType;
  offersList: OfferType[];
  offer: OneOfferType | null;
  nearbyOffers: OfferType[];
  offerComments: ReviewsType[];
  currentSortType: SortListType;
  isLoadingOffers: boolean;
  isLoadingOffer: boolean;
  isLoadingNearbyOffers: boolean;
  isLoadingOffersComments: boolean;
  isLoadingComment: boolean;
  authorizationStatus: LoginStatusList;
  userInfo: UserData | null;
  error: string | null;
  isErrorConnection: boolean;
};

const initialState: InitialStateType = {
  activeCity: ACTIVE_CITY,
  offersList: [],
  offer: null,
  nearbyOffers: [],
  offerComments: [],
  currentSortType: DEFAULT_SORT_TYPE,
  isLoadingOffers: false,
  isLoadingOffer: false,
  isLoadingNearbyOffers: false,
  isLoadingOffersComments: false,
  isLoadingComment: false,
  authorizationStatus: LoginStatus.NoAuth,
  userInfo: null,
  error: null,
  isErrorConnection: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isLoadingOffers = true;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isLoadingOffers = false;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offersList = action.payload;
      state.isLoadingOffers = false;
    })
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
    })
    .addCase(fetchOfferComments.pending, (state) => {
      state.isLoadingOffersComments = true;
    })
    .addCase(fetchOfferComments.rejected, (state) => {
      state.isLoadingOffersComments = false;
    })
    .addCase(fetchOfferComments.fulfilled, (state, action) => {
      if (action.payload) {
        state.offerComments = action.payload;
      }
      state.isLoadingOffersComments = false;
    })
    .addCase(postOfferComment.pending, (state) => {
      state.isLoadingComment = true;
    })
    .addCase(postOfferComment.rejected, (state) => {
      state.isLoadingComment = false;
    })
    .addCase(postOfferComment.fulfilled, (state, action) => {
      state.offerComments = state.offerComments.concat([action.payload]);
      state.isLoadingComment = false;
    })
    .addCase(checkAuthStatus.fulfilled, (state, action) => {
      state.authorizationStatus = LoginStatus.Auth;
      state.userInfo = action.payload;
    })
    .addCase(checkAuthStatus.rejected, (state) => {
      state.authorizationStatus = LoginStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = LoginStatus.Auth;
      state.userInfo = action.payload;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = LoginStatus.NoAuth;
    })
    .addCase(logoutAction.fulfilled, (state) => {
      state.authorizationStatus = LoginStatus.NoAuth;
      state.userInfo = null;
    })
    .addCase(changeSortingType, (state, action) => {
      state.currentSortType = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setErrorConnectionStatus, (state, action) => {
      state.isErrorConnection = action.payload;
    });
});

export { reducer };
