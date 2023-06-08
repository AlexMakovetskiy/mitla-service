import { AsyncThunkAction } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { IDataState } from '../../../interfaces/pages/authorization';
import { getUserInfo } from '../../userInfo/UserInfoThunk';
import { store } from '../..';
import { API_BASE_URL, API_LOGIN_ENDPOINT } from '../../../utils/Main';
import { IUserResponseInfo } from '../../types/store-types';

const mockStore = configureMockStore([thunk]);

describe('test Redux Thunk getUserInfo', () => {
    const testUserData: IDataState = {
        email: 'test@dthh.com',
        password: 'fsdfaty',
    };

    it('should fetch return promise correctly', async () => {
        const response: AsyncThunkAction<IUserResponseInfo, IDataState, typeof store> = getUserInfo(testUserData);
        expect(response).toHaveLength(3);
        expect(response).toBeInstanceOf(Function);
    });

    it('calls fetch with the correct url', async () => {
        const fetchData = jest
            .spyOn(global, 'fetch')
            .mockResolvedValue({ json: jest.fn().mockResolvedValue([]) } as unknown as Response);

        await getUserInfo(testUserData)(mockStore().dispatch, () => null, null);
        expect(fetchData).toHaveBeenCalledWith(`${API_BASE_URL}${API_LOGIN_ENDPOINT}`, {
            method: 'POST',
            body: JSON.stringify(testUserData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    });

    it('calls fetch with the correct url and throws an error if the response is not ok', async () => {
        const fetchData = jest
            .spyOn(global, 'fetch')
            .mockResolvedValue({ ok: false, status: 500 } as Response);
        try {
            await getUserInfo(testUserData)(mockStore().dispatch, () => null, null);
        } catch (error) {
            expect(error).toEqual('Failed to fetch user data');
        }
        expect(fetchData).toHaveBeenCalledWith(`${API_BASE_URL}${API_LOGIN_ENDPOINT}`, {
            method: 'POST',
            body: JSON.stringify(testUserData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    });
});