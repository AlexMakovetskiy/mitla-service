import { fireEvent, screen } from '@testing-library/react';

import { appRender, testUserData } from '../../utils/Testing';

import Review from './Review';

describe('test component Review', () => {
    test('should render correctly', () => {
        appRender(<Review data={testUserData}/>);

        const picture = screen.getByTestId('user-photo-test');
        const userName = screen.getByText(/nick jones/i);
        const reviewContent = screen.getByText(/good luck/i);
        expect(picture).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
        expect(reviewContent).toBeInTheDocument();
    });

    test('should favorites button correctly', () => {
        appRender(<Review data={testUserData}/>);

        const logoHeart = screen.getByTestId('favorite-post-button-test');
        expect(logoHeart).toBeInTheDocument();
        fireEvent.click(logoHeart);
        expect(logoHeart).toHaveClass('action-activated');
    });
});