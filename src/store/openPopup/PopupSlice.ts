import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IPopupInitialState } from '../types/store-types';

const initialStatePopup: IPopupInitialState = {
    isOpen: false,
};

const popupSlice = createSlice({
    name: 'popup',
    initialState: initialStatePopup,
    reducers: {
        openPopup(state: IPopupInitialState, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        },
    },
});

export const { openPopup } = popupSlice.actions;
export default popupSlice.reducer;