import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IReviewsInitialState } from '../types/store-types';
import { IReview } from '../../interfaces/pages/Main';

import { getReviews } from './ReviewsThunk';

const initialStateReviews: IReviewsInitialState = {
    reviews: [],
    loading: false,
    error: null,
};

const ReviewListSlice = createSlice({
    name: 'reviews',
    initialState: initialStateReviews,
    reducers: {},
    extraReducers (builder) {
        builder.addCase(getReviews.fulfilled, (state: IReviewsInitialState, action: PayloadAction<IReview[]>) => {
            state.loading = false;
            state.reviews = action.payload;
        });
        builder.addCase(getReviews.rejected, (state: IReviewsInitialState, action: PayloadAction<string | unknown>) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(getReviews.pending, (state: IReviewsInitialState) => {
            state.loading = true;
        });
    },
});

// eslint-disable-next-line no-empty-pattern
export const {} = ReviewListSlice.actions;
export default ReviewListSlice.reducer;