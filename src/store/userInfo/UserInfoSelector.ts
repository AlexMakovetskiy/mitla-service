import { storeStateType } from '..';

const getUserDataSelector = (state: storeStateType) => {
    return state.UserInfoSlice;
};

export default getUserDataSelector;