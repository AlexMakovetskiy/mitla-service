import { createAsyncThunk } from '@reduxjs/toolkit';

import { IReview } from '../../interfaces/pages/Main';
import { API_BASE_URL, API_REVIEWS_ENDPOINT } from '../../helpers/Main';

export const getReviews = createAsyncThunk<IReview[], undefined>(
    'reviews',
    async (params, thunkAPI) => {
        try {
            const response = await fetch(`${API_BASE_URL}${API_REVIEWS_ENDPOINT}`);
            return (await response.json()) as IReview[];
        } catch (error: unknown) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);