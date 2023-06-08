import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IReview } from '../../interfaces/pages/Main';

import { getReviews } from './ReviewsThunk';

interface IReviewsInitialState {
    reviews: IReview[],
    loading: boolean,
    error: null,
}

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
        builder.addCase(getReviews.fulfilled, (state: IReviewsInitialState, action: PayloadAction<any>) => {
            state.loading = false;
            state.reviews = action.payload;
        });
        builder.addCase(getReviews.rejected, (state: IReviewsInitialState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload.message;
        });
        builder.addCase(getReviews.pending, (state: IReviewsInitialState) => {
            state.loading = true;
        });
    },
});

// eslint-disable-next-line no-empty-pattern
export const {} = ReviewListSlice.actions;
export default ReviewListSlice.reducer;