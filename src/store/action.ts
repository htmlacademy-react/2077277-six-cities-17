import { createAction } from '@reduxjs/toolkit';
import { CitiesListType, OfferType, SortListType } from '../type';

const changeCity = createAction<CitiesListType>('mainPage/changeCity');
const getOffersList = createAction<OfferType[]>('offers/getOffersList');
const changeSortingType = createAction<SortListType>('sorting/changeSortingType');
const changeLoadingStatus = createAction<boolean>('offers/changeLoadingStatus');
const setError = createAction<string | null>('error/setError');

export {changeCity, getOffersList, changeSortingType, changeLoadingStatus, setError};
