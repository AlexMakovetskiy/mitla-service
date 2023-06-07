import { storeStateType } from '..';


const openingPopupSelector = (state: storeStateType) => {
    return state.popupSlice.isOpen;
};

export default openingPopupSelector;