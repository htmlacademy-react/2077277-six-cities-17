import { ReviewsType } from '../../type';
import { NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOfferComments, postOfferComment } from '../api-action';

type InitialStateType = {
  offerComments: ReviewsType[];
  isLoadingOffersComments: boolean;
  isLoadingComment: boolean;
};

const initialState: InitialStateType = {
  offerComments: [],
  isLoadingOffersComments: false,
  isLoadingComment: false,
};

const commentsSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferComments.pending, (state) => {
        state.isLoadingOffersComments = true;
      })
      .addCase(fetchOfferComments.rejected, (state) => {
        state.isLoadingOffersComments = false;
      })
      .addCase(fetchOfferComments.fulfilled, (state, action) => {
        if (action.payload) {
          state.offerComments = action.payload;
        }
        state.isLoadingOffersComments = false;
      })
      .addCase(postOfferComment.pending, (state) => {
        state.isLoadingComment = true;
      })
      .addCase(postOfferComment.rejected, (state) => {
        state.isLoadingComment = false;
      })
      .addCase(postOfferComment.fulfilled, (state, action) => {
        state.offerComments = state.offerComments.concat([action.payload]);
        state.isLoadingComment = false;
      });
  }
});

export default commentsSlice;
