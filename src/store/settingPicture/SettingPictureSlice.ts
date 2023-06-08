import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IPictureInitialState } from '../types/store-types';
import { USER_PHOTO_BASE_USR } from '../../helpers/Review';

const initialStatePicture: IPictureInitialState = {
    pictureSrc: USER_PHOTO_BASE_USR,
};

const settingPictureSlice = createSlice({
    name: 'settingPicture',
    initialState: initialStatePicture,
    reducers: {
        setPicture(state: IPictureInitialState, action: PayloadAction<string>) {
            state.pictureSrc = action.payload;
        },
    },
});

export const { setPicture } = settingPictureSlice.actions;
export default settingPictureSlice.reducer;
