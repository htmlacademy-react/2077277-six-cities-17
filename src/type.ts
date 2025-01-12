import { City, LoginStatus, RATING_MEANING, RATING_STARS, SortType, RoutePath } from './const';
import { store } from './store';

type CitiesListType = typeof City[keyof typeof City];
type LoginStatusList = typeof LoginStatus[keyof typeof LoginStatus];
type RoutePathType = typeof RoutePath[keyof typeof RoutePath];

type PageParamsType = {
  ImageWrapperClass: string;
  CardInfoClass: string;
  ImgWidth: number;
  ImgHeight: number;
};

type LogoParamsType = {
  Class: string;
  Width: number;
  Height: number;
};

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type CityType = {
  name: CitiesListType;
  location: LocationType;
};

type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type FormDataType = {
  rating: number;
  review: string;
};

type ReviewsType = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserType;
};

type HostType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

type OneOfferType = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  images: string[];
  city: CityType;
  location: LocationType;
  goods: string[];
  host: HostType;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
};

type SortListType = typeof SortType[keyof typeof SortType];

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

type RatingMeaningType = typeof RATING_MEANING[number];
type RatingStarsType = typeof RATING_STARS[number];

type State = ReturnType<typeof store.getState>;

type ErrorMessageType = {
  type: string;
  message: string;
}

type Token = string;

type AuthData = {
  login: string;
  password: string;
};

type UserData = {
  id: number;
  email: string;
  token: string;
};

type CommentInfoType = {
  comment: FormDataType;
  id: string;
};

export type { CitiesListType, LoginStatusList, PageParamsType, LogoParamsType, OfferType, FormDataType, RatingMeaningType, RatingStarsType, CityType, LocationType, ReviewsType, OneOfferType, UserType, RootState, AppDispatch, SortListType, State, ErrorMessageType, Token, AuthData, UserData, CommentInfoType, RoutePathType };
