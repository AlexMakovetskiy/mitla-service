import { IReviewsInitialState } from '../../types/store-types';
import { getReviews } from '../../gettingReviews/ReviewsThunk';
import ReviewListSlice from '../../gettingReviews/ReviewsSlice';
import { testUserData } from '../../../utils/Testing';

describe('test reducers ReviewListSlice', () => {
    const initialState: IReviewsInitialState = {
        reviews: [],
        loading: false,
        error: null,
    };

    it('should handle getReviews.fulfilled', () => {
        const reviewListTest = [testUserData, testUserData];
        const action = { payload: reviewListTest };
        const state = ReviewListSlice(initialState, {type: getReviews.fulfilled.type, payload: action.payload});
        expect(state.loading).toEqual(false);
        expect(state.reviews).toEqual(reviewListTest);
    });

    it('should handle getReviews.rejected', () => {
        const errorResponse = 'Error 404! Not found';
        const state = ReviewListSlice(initialState, {type: getReviews.rejected.type, payload: errorResponse});
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(errorResponse);
    });

    it('should handle getReviews.pending', () => {
        const state = ReviewListSlice(initialState, {type: getReviews.pending.type});
        expect(state.loading).toEqual(true);
    });
});