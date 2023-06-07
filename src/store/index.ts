import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { openingPopupReducer, setPictureReducer } from './reducers';

const reducers = combineReducers({
    openingPopupReducer,
    setPictureReducer,
});

const store = configureStore({
    reducer: reducers,
    devTools: true,
});

export type storeStateType = ReturnType<typeof store.getState>;

export { store };