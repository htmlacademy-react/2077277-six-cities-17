import { createAction } from '@reduxjs/toolkit';
import { CitiesListType, SortListType } from '../type';

const changeCity = createAction<CitiesListType>('mainPage/changeCity');
const changeSortingType = createAction<SortListType>('sorting/changeSortingType');
const setError = createAction<string | null>('error/setError');

export {changeCity, changeSortingType, setError};
