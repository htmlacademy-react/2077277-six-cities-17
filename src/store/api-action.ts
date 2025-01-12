import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { setError } from './action';
import { store } from '.';
import { State, AppDispatch, OfferType, AuthData, UserData, ReviewsType, CommentInfoType, OneOfferType } from '../type';
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
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

const loginAction = createAppAsyncThunk<UserData, AuthData>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    return data;
  }
);

const logoutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

const getOfferInfoById = createAppAsyncThunk<OneOfferType, string>(
  'offer/getOfferInfo',
  async (id, { extra: api }) => {
    const { data } = await api.get<OneOfferType>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

const fetchNearbyOffers = createAppAsyncThunk<OfferType[], string>(
  'offers/fetchNearbyOffers',
  async (id, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

const fetchOfferComments = createAppAsyncThunk<ReviewsType[], string>(
  'offer/fetchOfferComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<ReviewsType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

const postOfferComment = createAppAsyncThunk<ReviewsType, CommentInfoType>(
  'offer/postOfferComment',
  async ({ id, comment }, { extra: api }) => {
    const { data } = await api.post<ReviewsType>(`${APIRoute.Comments}/${id}`, { comment: comment.review, rating: +comment.rating });
    return data;
  }
);

const clearError = createAppAsyncThunk<void, undefined>(
  'error/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), ERROR_TIMEOUT);
  }
);

export { clearError, fetchOffers, checkAuthStatus, loginAction, logoutAction, getOfferInfoById, fetchNearbyOffers, fetchOfferComments, postOfferComment };
