import { SortListType } from '../../type';
import { DEFAULT_SORT_TYPE, NameSpace } from '../../const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  currentSortType: SortListType;
};

const initialState: InitialStateType = {
  currentSortType: DEFAULT_SORT_TYPE,
};

export const sortingSlice = createSlice({
  name: NameSpace.Sorting,
  initialState,
  reducers: {
    changeSortingType (state, action: PayloadAction<SortListType>) {
      state.currentSortType = action.payload;
    },
  },
});

export const {changeSortingType} = sortingSlice.actions;
