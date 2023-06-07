import { PayloadAction } from '@reduxjs/toolkit';

import { USER_PHOTO_BASE_USR } from '../helpers/Review';

import { OPEN_POPUP, SET_PICTURE } from './action-types';

interface IPopupState {
    isOpen: boolean
}

interface IPictureState {
    pictureSrc: string
}

const initialStatePopup = {
    isOpen: false,
};

const initialStatePicture = {
    pictureSrc: USER_PHOTO_BASE_USR,
};

const openingPopupReducer = (state: IPopupState = initialStatePopup, action: PayloadAction<boolean>) => {
    switch (action.type) {
    case OPEN_POPUP:
        return {
            ...state,
            isOpen: action.payload,
        };
    
    default:
        return state;
    }
};

const setPictureReducer = (state: IPictureState = initialStatePicture, action: PayloadAction<string>) => {
    switch (action.type) {
    case SET_PICTURE:
        return {
            ...state,
            pictureSrc: action.payload,
        };
    default:
        return state;
    }
};

export { openingPopupReducer, setPictureReducer };
