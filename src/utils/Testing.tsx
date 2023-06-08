import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AppWrapperType, IReview, IWrapperReduxRouterProps } from '../interfaces/pages/Main';
import { IUserInfoInitialState } from '../store/types/store-types';
import { ThemeProvider } from '../helpers/ThemeContext';
import { store } from '../store';

import { USER_PHOTO_BASE_USR } from './Review';

const AppWrapper: AppWrapperType = ({children}: IWrapperReduxRouterProps): ReactElement => 
    <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </MemoryRouter>
    </Provider>;

const appRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AppWrapper, ...options});

const testUserData: IReview = {
    id: 4,
    image: USER_PHOTO_BASE_USR,
    text: 'good luck',
    date: '21-12-19',
    lesson_num: 43,
    title: 'Nick Jones',
    author: 1,
};

const testUserAuthInfo: IUserInfoInitialState = {
    email: 'test@gmail.com',
    accessToken: 'string',
    refreshToken: 'string',
    isActivated: false,
    loading: false,
    error: null,
};

export { appRender, testUserData, testUserAuthInfo };