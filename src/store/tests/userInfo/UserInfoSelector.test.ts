// import { reviewListSelector, reviewsLoadingSelector } from '../../gettingReviews/ReviewsSelector';
import getUserDataSelector from '../../userInfo/UserInfoSelector';
import { testUserAuthInfo } from '../../../utils/Testing';
import mockState from '../utils';

describe('test getUserDataSelector', () => {
    test('should work with filled state', () => {
        mockState.UserInfoSlice = testUserAuthInfo;
        expect(getUserDataSelector(mockState)).toEqual(testUserAuthInfo);
    });
});