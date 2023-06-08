import { createAsyncThunk } from '@reduxjs/toolkit';

import { PROJECT_BASE_URL } from '../../helpers/Main';

export const getReviews = createAsyncThunk(
    'reviews',
    async (params, thunkAPI) => {
        try {
            const response = await fetch(PROJECT_BASE_URL);
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);