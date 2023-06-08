import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { getUsers } from './usersThunk';

interface IUser {
    _id: string,
    email: string,
    password: string,
    isActivated: boolean,
    activationLink: string,
    __v: number,
}

interface IUsersInitialState {
    users: IUser[],
    error: null,
}

const initialStateUsers: IUsersInitialState = {
    users: [],
    error: null,
};

const UserListSlice = createSlice({
    name: 'users',
    initialState: initialStateUsers,
    reducers: {},
    extraReducers (builder) {
        builder.addCase(getUsers.fulfilled, (state: IUsersInitialState, action:PayloadAction<any>) => {
            state.users = action.payload;
        });
        builder.addCase(getUsers.rejected, (state: IUsersInitialState, action:PayloadAction<any>) => {
            state.error = action.payload.message;
        });
    },
});

// eslint-disable-next-line no-empty-pattern
export const {} = UserListSlice.actions;
export default UserListSlice.reducer;