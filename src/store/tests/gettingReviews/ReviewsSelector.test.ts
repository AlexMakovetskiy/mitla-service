import { reviewListSelector, reviewsLoadingSelector } from '../../gettingReviews/ReviewsSelector';
import { testUserData } from '../../../utils/Testing';
import mockState from '../utils';

describe('test reviewListSelector', () => {
    test('should work with filled state', () => {
        mockState.ReviewListSlice.reviews = [testUserData, testUserData];
        expect(reviewListSelector(mockState)).toEqual([testUserData, testUserData]);
    });

    test('should work with empty state', () => {
        mockState.ReviewListSlice.reviews = [];
        expect(reviewListSelector(mockState)).toEqual([]);
    });
});

describe('test reviewsLoadingSelector', () => {
    test('should work with filled state', () => {
        mockState.ReviewListSlice.loading = true;
        expect(reviewsLoadingSelector(mockState)).toEqual(true);
    });

    test('should work with empty state', () => {
        mockState.ReviewListSlice.loading = false;
        expect(reviewsLoadingSelector(mockState)).toEqual(false);
    });
});