import { storeStateType } from '..';

const reviewListSelector = (state: storeStateType) => {
    return state.ReviewListSlice.reviews;
};

const reviewsLoadingSelector = (state: storeStateType) => {
    return state.ReviewListSlice.loading;
};

export { reviewListSelector, reviewsLoadingSelector };