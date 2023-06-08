import { fireEvent, screen } from '@testing-library/react';

import { appRender } from '../../utils/Testing';
import { USER_PHOTO_BASE_USR } from '../../utils/Review';

import { IReview } from '../../interfaces/pages/Main';

import FavoritePostAction from './FavoritePostAction';

describe('test component FavoritePostAction', () => {
    const testUserData: IReview = {
        id: 4,
        image: USER_PHOTO_BASE_USR,
        text: 'good luck',
        date: '21-12-19',
        lesson_num: 43,
        title: 'Nick Jones',
        author: 1,
    };

    test('should render correctly', () => {
        appRender(<FavoritePostAction postData={testUserData}/>);

        const button = screen.getByTestId('favorite-post-button-test');
        const picture = screen.getByTestId('heart-logo-action-test');
        expect(button).toBeInTheDocument();
        expect(picture).toBeInTheDocument();
    });

    test('should popup render correctly', () => {
        appRender(<FavoritePostAction postData={testUserData}/>);

        const logoHeart = screen.getByTestId('favorite-post-button-test');
        expect(logoHeart).toBeInTheDocument();
        fireEvent.click(logoHeart);
        expect(logoHeart).toHaveClass('action-activated');
    });
});