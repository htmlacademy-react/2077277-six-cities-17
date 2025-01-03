const City = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

const ACTIVE_CITY = City.Paris;
const RATING_STARS = [5, 4, 3, 2, 1] as const;
const RATING_MEANING = ['perfect', 'good', 'not bad', 'badly', 'terribly'] as const;

const FavoritesPage = {
  ImageWrapperClass: 'favorites',
  CardInfoClass: 'favorites__card-info',
  ImgWidth: 150,
  ImgHeight: 110,
} as const;

const OffersPage = {
  ImageWrapperClass: 'near-places',
  CardInfoClass: '',
  ImgWidth: 260,
  ImgHeight: 200,
} as const;

const MainPage = {
  ImageWrapperClass: 'cities',
  CardInfoClass: '',
  ImgWidth: 260,
  ImgHeight: 200,
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
  Offer: '/offer/:offerId',
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

const RATING_SHARE = 20;

const ReviewLength = {
  Min: 50,
  Max: 300,
} as const;

const StarsColor = {
  Checked: '#ff9000',
  UnChecked: '#c7c7c7',
} as const;

const UrlMarker = {
  Default: 'img/pin.svg',
  Current: 'img/pin-active.svg',
} as const;

const MapInfo = {
  Url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

const CityLocation = {
  [City.Paris]: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  [City.Cologne]: {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13
  },
  [City.Dusseldorf]: {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13
  },
  [City.Brussels]: {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13
  },
  [City.Amsterdam]: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
  [City.Hamburg]: {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13
  },
};

const BookmarkOfferParams = {
  Class: 'offer',
  Width: 31,
  Height: 33,
} as const;

const BookmarkCardParams = {
  Class: 'place-card',
  Width: 18,
  Height: 19,
} as const;

const SortType = {
  Popular: 'Popular',
  PriceLow: 'Price: low to high',
  PriceHigh: 'Price: high to low',
  Rating: 'Top rated first'
} as const;

const DEFAULT_SORT_TYPE = SortType.Popular;

const Server = {
  Url: 'https://16.design.htmlacademy.pro/six-cities',
  Timeout: 5000,
} as const;

const TOKEN_NAME = 'six-cities-token';
const ERROR_TIMEOUT = 3000;

const APIRoute = {
  Offers: '/offers',
  Login: '/login',
  Logout: '/logout',
} as const;

export {
  City, ACTIVE_CITY, FavoritesPage, OffersPage, MainPage,
  LoginStatus, RoutePath, PageType, LogoHeaderParams, LogoFooterParams,
  RATING_SHARE, RATING_STARS, RATING_MEANING, ReviewLength, StarsColor,
  UrlMarker, MapInfo, CityLocation, BookmarkOfferParams, BookmarkCardParams, SortType, DEFAULT_SORT_TYPE, Server, TOKEN_NAME, ERROR_TIMEOUT, APIRoute
};
