import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IUserInfoState {
    email: string,
    accessToken: string,
    refreshToken: string,
    isActivated: boolean,
}

const initialStateUserData: IUserInfoState = {
    email: '',
    accessToken: '',
    refreshToken: '',
    isActivated: false,
};

const UserInfoSlice = createSlice({
    name: 'userInfo',
    initialState: initialStateUserData,
    reducers: {
        setUserData: (state: IUserInfoState, action: PayloadAction<Object>) => {
            return {
                ...state,
                ...action.payload,
            };
        },
        removeUserData: (state: IUserInfoState) => {
            state.email = '';
            state.accessToken = '';
            state.refreshToken = '';
            state.isActivated = false;
        },
    },
});

export const { setUserData, removeUserData } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
