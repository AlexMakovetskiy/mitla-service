import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IPopupState {
    isOpen: boolean
}

const initialStatePopup = {
    isOpen: false,
};

const popupSlice = createSlice({
    name: 'popup',
    initialState: initialStatePopup,
    reducers: {
        openPopup(state: IPopupState, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        },
    },
});

export const { openPopup } = popupSlice.actions;
export default popupSlice.reducer;