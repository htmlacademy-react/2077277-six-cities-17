import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { setError } from './action';
import { store } from '.';
import { State, AppDispatch, OfferType, AuthData, UserData } from '../type';
import { ERROR_TIMEOUT, APIRoute } from '../const';
import { saveToken, dropToken } from '../services/token';


const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>();

const fetchOffers = createAppAsyncThunk<OfferType[], undefined>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  }
);

const checkAuthStatus = createAppAsyncThunk<UserData, undefined>(
  'user/checkAuthStatus',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

const loginAction = createAppAsyncThunk<UserData, AuthData>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const {data} = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

const logoutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, {extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

const clearError = createAppAsyncThunk<void, undefined>(
  'error/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), ERROR_TIMEOUT);
  }
);

export { clearError, fetchOffers, checkAuthStatus, loginAction, logoutAction };
