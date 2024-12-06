const City = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

const FavoritesCity = {
  [City.Paris]: false,
  [City.Cologne]: true,
  [City.Brussels]: false,
  [City.Amsterdam]: true,
  [City.Hamburg]: false,
  [City.Dusseldorf]: false
} as const;

const offerInsideItems = [
  'wi-Fi', 'heating', 'kitchen', 'fridge', 'washing machine', 'coffee machine', 'dishwasher', 'towels', 'baby seat', 'cabel TV'
];

const ACTIVE_CITY = City.Paris;
const CARDS_NUMBER = 5;
const OFFER_IMAGE_NUMBER = 6;
const REVIEWS_NUMBER = 1;
const OFFER_CARDS_NUMBER = 3;

const FavoritesPage = {
  ImageWrapperClass: 'favorites',
  CardInfoClass: 'favorites__card-info',
  ImgWidth: 150,
  ImgHeight: 110,
  StarsWidth: '100%'
} as const;

const OffersPage = {
  ImageWrapperClass: 'near-places',
  CardInfoClass: '',
  ImgWidth: 260,
  ImgHeight: 200,
  StarsWidth: '80%'
} as const;

const MainPage = {
  ImageWrapperClass: 'cities',
  CardInfoClass: '',
  ImgWidth: 260,
  ImgHeight: 200,
  StarsWidth: '80%'
} as const;

const LoginStatus = {
  Auth: 'Auth',
  NoAuth: 'NoAuth',
  Unknown: 'Unknown'
} as const;

const RoutePath = {
  Index: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFound: '*'

} as const;

const PageType = {
  Main: 'Main',
  Login: 'login',
  Favorites: 'Favorites',
  Offer: 'Offer',
  NotFound: 'Not found'

} as const;

const LogoHeaderParams = {
  Class: 'header',
  Width: 81,
  Height: 42,
} as const;

const LogoFooterParams = {
  Class: 'footer',
  Width: 64,
  Height: 33,
} as const;

export {
  City, ACTIVE_CITY, CARDS_NUMBER, FavoritesCity, OFFER_IMAGE_NUMBER,
  offerInsideItems, REVIEWS_NUMBER, FavoritesPage, OFFER_CARDS_NUMBER,
  OffersPage, MainPage, LoginStatus, RoutePath, PageType, LogoHeaderParams, LogoFooterParams
};
