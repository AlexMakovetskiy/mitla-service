import { storeStateType } from '..';

const setPictureSelector = (state: storeStateType) => {
    return state.settingPictureSlice.pictureSrc; 
};

export default setPictureSelector;