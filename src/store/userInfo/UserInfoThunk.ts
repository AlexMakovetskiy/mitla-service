import { createAsyncThunk } from '@reduxjs/toolkit';

import { IUserResponseInfo } from '../types/store-types';
import { IDataState } from '../../interfaces/pages/authorization';
import { API_BASE_URL, API_LOGIN_ENDPOINT } from '../../helpers/Main';

export const getUserInfo = createAsyncThunk(
    'user/getInfo',
    async (params: IDataState, thunkAPI) => {
        try {
            const response = await fetch(`${API_BASE_URL}${API_LOGIN_ENDPOINT}`, {
                method: 'POST',
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return (await response.json()) as IUserResponseInfo;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);