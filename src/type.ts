import { City, LoginStatus } from './const';

type CitiesList = typeof City[keyof typeof City];
type LoginStatusList = typeof LoginStatus[keyof typeof LoginStatus];

export type {CitiesList, LoginStatusList};
