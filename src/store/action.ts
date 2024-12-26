import { createAction } from '@reduxjs/toolkit';
import { CitiesListType, OfferType } from '../type';

const changeCity = createAction<CitiesListType>('mainPage/changeCity');
const getOffersList = createAction<OfferType[]>('offers/getOffersList');

export {changeCity, getOffersList};
