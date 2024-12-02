import { City, LoginStatus } from './const';

type CitiesList = typeof City[keyof typeof City];
type LoginStatusList = typeof LoginStatus[keyof typeof LoginStatus];

type PageParamsType = {
  ImageWrapperClass: string;
  CardInfoClass: string;
  ImgWidth: number;
  ImgHeight: number;
  StarsWidth: string;
};

type LogoParamsType = {
  Class: string;
  Width: number;
  Height: number;
};

export type { CitiesList, LoginStatusList, PageParamsType, LogoParamsType };
