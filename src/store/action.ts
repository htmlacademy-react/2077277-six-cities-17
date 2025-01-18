import { createAction } from '@reduxjs/toolkit';
import { CitiesListType, SortListType } from '../type';

const changeCity = createAction<CitiesListType>('mainPage/changeCity');
const changeSortingType = createAction<SortListType>('sorting/changeSortingType');
const setError = createAction<string | null>('error/setError');
const setErrorConnectionStatus = createAction<boolean>('error/setErrorConnectionStatus');

export {changeCity, changeSortingType, setError, setErrorConnectionStatus};
