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

const ACTIVE_CITY = City.Paris;
const CARDS_NUMBER = 5;

export { City, ACTIVE_CITY, CARDS_NUMBER, FavoritesCity };
