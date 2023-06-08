import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_BASE_URL, API_REVIEWS_ENDPOINT } from '../../helpers/Main';

const getUsers = createAsyncThunk(
    'users',
    async (params, thunkAPI) => {
        try {
            const response = await fetch(`${API_BASE_URL}${API_REVIEWS_ENDPOINT}`);
            return await response.json();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export { getUsers };