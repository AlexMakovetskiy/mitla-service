import { storeStateType } from '..';

const favoritePostsSelector = (state: storeStateType) => {
    return state.favoritePostsSlice.favoritePosts;
};

export default favoritePostsSelector;