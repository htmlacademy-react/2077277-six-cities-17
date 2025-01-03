import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { setError } from './action';
import { store } from '.';
import { State, AppDispatch, OfferType} from '../type';
import { ERROR_TIMEOUT, APIRoute } from '../const';


const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>();

const fetchOffers = createAppAsyncThunk<OfferType[], undefined>(
  'data/fetchOffers',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  }
);

const clearError = createAppAsyncThunk<void, undefined>(
  'error/clearError',
  () => {
    setTimeout(() => store.dispatch(setError(null)), ERROR_TIMEOUT);
  }
);

export { clearError, fetchOffers };
