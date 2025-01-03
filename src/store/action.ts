import { createAction } from '@reduxjs/toolkit';
import { CitiesListType, SortListType } from '../type';

const changeCity = createAction<CitiesListType>('mainPage/changeCity');
const changeSortingType = createAction<SortListType>('sorting/changeSortingType');
const changeLoadingStatus = createAction<boolean>('offers/changeLoadingStatus');
const setError = createAction<string | null>('error/setError');

export {changeCity, changeSortingType, changeLoadingStatus, setError};
