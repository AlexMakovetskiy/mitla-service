import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IUserInfoInitialState, IUserResponseInfo } from '../types/store-types';

import { getUserInfo } from './UserInfoThunk';

const initialStateUserData: IUserInfoInitialState = {
    email: '',
    accessToken: '',
    refreshToken: '',
    isActivated: false,
    loading: false,
    error: null,
};

const UserInfoSlice = createSlice({
    name: 'userInfo',
    initialState: initialStateUserData,
    reducers: {
        removeUserData: (state: IUserInfoInitialState) => {
            state.email = '';
            state.accessToken = '';
            state.refreshToken = '';
            state.isActivated = false;
            state.loading = false;
        },
    },
    extraReducers (builder) {
        builder.addCase(getUserInfo.fulfilled, (state: IUserInfoInitialState, action: PayloadAction<IUserResponseInfo>) => {
            state.email = action.payload.user.email;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isActivated = action.payload.user.isActivated;
            state.loading = false;
        });
        builder.addCase(getUserInfo.rejected, (state: IUserInfoInitialState, action: PayloadAction<string | unknown>) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(getUserInfo.pending, (state: IUserInfoInitialState) => {
            state.loading = true;
        });
    },
});

export const { removeUserData } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
