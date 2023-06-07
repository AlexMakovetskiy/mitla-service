import { storeStateType } from '.';

const openingPopupSelector = (state: storeStateType) => {
    return state.openingPopupReducer.isOpen;
};

const setPictureSelector = (state: storeStateType) => {
    return state.setPictureReducer.pictureSrc; 
};

export { openingPopupSelector, setPictureSelector };