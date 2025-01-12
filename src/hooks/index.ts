import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, State } from '../type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>();

export {useAppDispatch, useAppSelector, createAppAsyncThunk};
