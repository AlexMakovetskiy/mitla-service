import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IReview } from '../../interfaces/pages/Main';
import { IFavoritePostsState } from '../types/store-types';

const favoritePostInitialState: IFavoritePostsState = {
    favoritePosts: [],
};

const favoritePostsSlice = createSlice({
    name: 'favoritePosts',
    initialState: favoritePostInitialState,
    reducers: {
        setFavoritePost: (state: IFavoritePostsState, action: PayloadAction<IReview>) => {
            const isFavoritePost = state.favoritePosts.find(favoritePost => favoritePost.id === action.payload.id);
            if(!isFavoritePost)
                state.favoritePosts = [action.payload, ...state.favoritePosts];
            state.favoritePosts = state.favoritePosts.filter(favoritePost => favoritePost.id !== isFavoritePost?.id);
        },
    },
});

export const { setFavoritePost } = favoritePostsSlice.actions;
export default favoritePostsSlice.reducer;