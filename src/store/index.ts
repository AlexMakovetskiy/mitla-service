import { configureStore, combineReducers } from '@reduxjs/toolkit';

import popupSlice from './openPopup/PopupSlice';
import settingPictureSlice from './settingPicture/SettingPictureSlice';
import ReviewListSlice from './gettingReviews/ReviewsSlice';
import favoritePostsSlice from './favoritePosts/favoritePostsSlice';
import UserInfoSlice from './userInfo/UserInfoSlice';

const reducers = combineReducers({
    popupSlice,
    settingPictureSlice,
    ReviewListSlice,
    favoritePostsSlice,
    UserInfoSlice,
});

const store = configureStore({
    reducer: reducers,
    devTools: true,
});

export type storeStateType = ReturnType<typeof store.getState>;

export { store };