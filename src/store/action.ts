import { createAction } from '@reduxjs/toolkit';
import { CitiesListType, OfferType, SortListType } from '../type';

const changeCity = createAction<CitiesListType>('mainPage/changeCity');
const getOffersList = createAction<OfferType[]>('offers/getOffersList');
const changeSortingType = createAction<SortListType>('sorting/changeSortingType');

export {changeCity, getOffersList, changeSortingType};
