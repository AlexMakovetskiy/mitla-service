import { storeStateType } from '..';

const reviewListSelector = (state: storeStateType) => {
    return state.ReviewListSlice.reviews;
};

export default reviewListSelector;