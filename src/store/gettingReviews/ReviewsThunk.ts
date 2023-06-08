import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_BASE_URL, API_REVIEWS_ENDPOINT } from '../../helpers/Main';

export const getReviews = createAsyncThunk(
    'reviews',
    async (params, thunkAPI) => {
        try {
            const response = await fetch(`${API_BASE_URL}${API_REVIEWS_ENDPOINT}`);
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);