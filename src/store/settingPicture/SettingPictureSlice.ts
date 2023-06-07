import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { USER_PHOTO_BASE_USR } from '../../helpers/Review';

interface IPictureState {
    pictureSrc: string
}

const initialStatePicture = {
    pictureSrc: USER_PHOTO_BASE_USR,
};

const settingPictureSlice = createSlice({
    name: 'settingPicture',
    initialState: initialStatePicture,
    reducers: {
        setPicture(state: IPictureState, action: PayloadAction<string>) {
            state.pictureSrc = action.payload;
        },
    },
});

export const { setPicture } = settingPictureSlice.actions;
export default settingPictureSlice.reducer;
