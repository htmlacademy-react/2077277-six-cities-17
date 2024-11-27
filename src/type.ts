import { City } from './const';

type CitiesList = typeof City[keyof typeof City];

export type {CitiesList};
