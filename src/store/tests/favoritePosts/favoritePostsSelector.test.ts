import favoritePostsSelector from '../../favoritePosts/favoritePostsSelector';
import { testUserData } from '../../../utils/Testing';
import mockState from '../utils';

describe('test favoritePostsSelector', () => {
    test('should work with filled state', () => {
        mockState.favoritePostsSlice.favoritePosts = [testUserData, testUserData];
        expect(favoritePostsSelector(mockState)).toEqual([testUserData, testUserData]);
    });

    test('should work with empty state', () => {
        mockState.favoritePostsSlice.favoritePosts = [];
        expect(favoritePostsSelector(mockState)).toEqual([]);
    });
});