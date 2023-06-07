import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IReview } from '../../interfaces/pages/Main';

interface IReviewsInitialState {
    reviews: IReview[],
}

const initialStateReviews: IReviewsInitialState = {
    reviews: [],
};

const ReviewListSlice = createSlice({
    name: 'reviews',
    initialState: initialStateReviews,
    reducers: {
        setReviewsData: (state: IReviewsInitialState, action: PayloadAction<any>) => {
            
            state.reviews = action.payload;
        },
    },
});

export const { setReviewsData } = ReviewListSlice.actions;
export default ReviewListSlice.reducer;