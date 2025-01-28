import { OfferType, AuthData, UserData, ReviewsType, CommentInfoType, OneOfferType, FullFavoriteOffer, FavoriteData } from '../type';
import { APIRoute, NameSpace } from '../const';
import { createAppAsyncThunk } from '../hooks';

const fetchOffers = createAppAsyncThunk<OfferType[], undefined>(
  `${NameSpace.Offers}/fetchOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  }
);

const fetchFavoriteOffers = createAppAsyncThunk<OfferType[], undefined>(
  `${NameSpace.Favorite}/fetchFavoritesOffers`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Favorite);
    return data;
  }
);

const changeFavoriteStatus = createAppAsyncThunk<FullFavoriteOffer, FavoriteData>(
  `${NameSpace.Favorite}/changeFavoriteStatus`,
  async ({offerId, isFavorite}, { extra: api}) => {
    const offerStatus = Number(!isFavorite);
    const {data} = await api.post<FullFavoriteOffer>(`${APIRoute.Favorite}/${offerId}/${offerStatus}`);
    return data;
  });

const checkAuthStatus = createAppAsyncThunk<UserData, undefined>(
  `${NameSpace.User}/checkAuthStatus`,
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

const loginAction = createAppAsyncThunk<UserData, AuthData>(
  `${NameSpace.User}/login`,
  async ({ login: email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    return data;
  }
);

const logoutAction = createAppAsyncThunk<void, undefined>(
  `${NameSpace.User}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
  }
);

const getOfferInfoById = createAppAsyncThunk<OneOfferType, string>(
  `${NameSpace.Offer}/getOfferInfo`,
  async (id, { extra: api }) => {
    const { data } = await api.get<OneOfferType>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

const fetchNearbyOffers = createAppAsyncThunk<OfferType[], string>(
  `${NameSpace.Offers}/fetchNearbyOffers`,
  async (id, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

const fetchOfferComments = createAppAsyncThunk<ReviewsType[], string>(
  `${NameSpace.Comments}/fetchOfferComments`,
  async (id, { extra: api }) => {
    const { data } = await api.get<ReviewsType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

const postOfferComment = createAppAsyncThunk<ReviewsType, CommentInfoType>(
  `${NameSpace.Comments}/postOfferComment`,
  async ({ id, comment }, { extra: api }) => {
    const { data } = await api.post<ReviewsType>(`${APIRoute.Comments}/${id}`, { comment: comment.review, rating: +comment.rating });
    return data;
  }
);

export { fetchOffers, checkAuthStatus, loginAction, logoutAction, getOfferInfoById, fetchNearbyOffers, fetchOfferComments, postOfferComment, fetchFavoriteOffers, changeFavoriteStatus };
