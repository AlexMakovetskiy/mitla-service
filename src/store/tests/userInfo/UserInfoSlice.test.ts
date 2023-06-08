import { IUserInfoInitialState, IUserResponseInfo } from '../../types/store-types';
import { getUserInfo } from '../../userInfo/UserInfoThunk';
import UserInfoSlice from '../../userInfo/UserInfoSlice';
import { testUserAuthInfo } from '../../../utils/Testing';

describe('test reducers UserInfoSlice', () => {
    const initialState: IUserInfoInitialState = {
        email: '',
        accessToken: '',
        refreshToken: '',
        isActivated: false,
        loading: false,
        error: null,
    };

    it('should handle getUserInfo.fulfilled', () => {
        const testResponse: IUserResponseInfo = {
            accessToken: testUserAuthInfo.accessToken,
            refreshToken: testUserAuthInfo.refreshToken,
            user: {
                email: testUserAuthInfo.email,
                id: '435',
                isActivated: testUserAuthInfo.isActivated,
            },
        };
        const action = { payload: testResponse };
        const state = UserInfoSlice(initialState, { type: getUserInfo.fulfilled.type, payload: action.payload });
        expect(state.accessToken).toEqual(testResponse.accessToken);
        expect(state.loading).toEqual(false);
    });

    it('should handle getUserInfo.rejected', () => {
        const errorResponse = 'Error 404! Not found';
        const state = UserInfoSlice(initialState, {type: getUserInfo.rejected.type, payload: errorResponse});
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(errorResponse);
    });

    it('should handle getUserInfo.pending', () => {
        const state = UserInfoSlice(initialState, {type: getUserInfo.pending.type});
        expect(state.loading).toEqual(true);
    });
});