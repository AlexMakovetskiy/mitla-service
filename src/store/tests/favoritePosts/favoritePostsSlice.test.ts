import favoritePostsSlice, { setFavoritePost } from '../../favoritePosts/favoritePostsSlice';
import { testUserData } from '../../../utils/Testing';

describe('test favoritePostsSlice reducers', () => {
    test('setFavoritePost should works correctly', () => {
        expect(favoritePostsSlice({favoritePosts: []}, setFavoritePost(testUserData))).toEqual({favoritePosts: [testUserData]});
    });

    test('setFavoritePost should dismiss duplicates', () => {
        expect(favoritePostsSlice({favoritePosts: []}, setFavoritePost(testUserData))).toEqual({favoritePosts: [testUserData]});
        expect(favoritePostsSlice({favoritePosts: []}, setFavoritePost(testUserData))).not.toEqual({favoritePosts: [testUserData, testUserData]});
    });
});