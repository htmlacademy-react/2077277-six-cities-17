import { OfferType, AuthData, UserData, ReviewsType, CommentInfoType, OneOfferType } from '../type';
import { APIRoute } from '../const';
import { createAppAsyncThunk } from '../hooks';

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
    return data;
  }
);

const logoutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
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
  'comments/fetchOfferComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<ReviewsType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

const postOfferComment = createAppAsyncThunk<ReviewsType, CommentInfoType>(
  'comments/postOfferComment',
  async ({ id, comment }, { extra: api }) => {
    const { data } = await api.post<ReviewsType>(`${APIRoute.Comments}/${id}`, { comment: comment.review, rating: +comment.rating });
    return data;
  }
);

export { fetchOffers, checkAuthStatus, loginAction, logoutAction, getOfferInfoById, fetchNearbyOffers, fetchOfferComments, postOfferComment };
