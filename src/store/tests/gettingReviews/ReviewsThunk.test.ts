import { AsyncThunkAction } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { IReview } from '../../../interfaces/pages/Main';
import { getReviews } from '../../gettingReviews/ReviewsThunk';
import { store } from '../..';
import { API_BASE_URL, API_REVIEWS_ENDPOINT } from '../../../utils/Main';

const mockStore = configureMockStore([thunk]);

describe('test Redux Thunk getReviews', () => {
    it('should fetch return promise correctly', async () => {
        const response: AsyncThunkAction<IReview[], undefined, typeof store> = getReviews();
        expect(response).toHaveLength(3);
        expect(response).toBeInstanceOf(Function);
    });

    it('calls fetch with the correct url', async () => {
        const fetchData = jest
            .spyOn(global, 'fetch')
            .mockResolvedValue({ json: jest.fn().mockResolvedValue([]) } as unknown as Response);

        await getReviews()(mockStore().dispatch, () => null, null);
        expect(fetchData).toHaveBeenCalledWith(`${API_BASE_URL}${API_REVIEWS_ENDPOINT}`);
    });

    it('calls fetch with the correct url and throws an error if the response is not ok', async () => {
        const fetchData = jest
            .spyOn(global, 'fetch')
            .mockResolvedValue({ ok: false, status: 500 } as Response);
        try {
            await getReviews()(mockStore().dispatch, () => null, null);
        } catch (error) {
            expect(error).toEqual('Failed to fetch reviews');
        }
        expect(fetchData).toHaveBeenCalledWith(`${API_BASE_URL}${API_REVIEWS_ENDPOINT}`);
    });
});
