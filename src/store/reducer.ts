import { createReducer } from '@reduxjs/toolkit';
import { ACTIVE_CITY, DEFAULT_SORT_TYPE, LoginStatus } from '../const';
import { CitiesListType, OfferType, SortListType, LoginStatusList, UserData, OneOfferType, ReviewsType } from '../type';
import { changeCity, changeSortingType, setError } from './action';
import { checkAuthStatus, fetchOffers, loginAction, logoutAction, getOfferInfoById, fetchNearbyOffers, fetchOfferComments } from './api-action';

const initialState = {
  activeCity: ACTIVE_CITY as CitiesListType,
  offersList: [] as OfferType[],
  offer: null as OneOfferType | null,
  nearbyOffers: [] as OfferType[],
  offerComments: [] as ReviewsType[],
  currentSortType: DEFAULT_SORT_TYPE as SortListType,
  isLoading: false as boolean,
  isLoadingOffer: false as boolean,
  isLoadingNearbyOffers: false as boolean,
  isLoadingOffersComments: false as boolean,
  authorizationStatus: LoginStatus.NoAuth as LoginStatusList,
  userInfo: null as UserData | null,
  error: null as string | null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offersList = action.payload;
      state.isLoading = false;
    })
    .addCase(getOfferInfoById.pending, (state) => {
      state.isLoadingOffer = true;
    })
    .addCase(getOfferInfoById.rejected, (state) => {
      state.isLoadingOffer = false;
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
    });
});

export { reducer };
