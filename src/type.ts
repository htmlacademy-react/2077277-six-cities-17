import { City, LoginStatus, RATING_MEANING, RATING_STARS } from './const';

type CitiesListType = typeof City[keyof typeof City];
type LoginStatusList = typeof LoginStatus[keyof typeof LoginStatus];

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

type ReviewType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};

type FormDataType = {
  rating: null | number;
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

type RatingMeaningType = typeof RATING_MEANING[number];
type RatingStarsType = typeof RATING_STARS[number];

export type { CitiesListType, LoginStatusList, PageParamsType, LogoParamsType, OfferType, ReviewType, FormDataType, RatingMeaningType, RatingStarsType, CityType, LocationType, ReviewsType, OneOfferType, UserType };
