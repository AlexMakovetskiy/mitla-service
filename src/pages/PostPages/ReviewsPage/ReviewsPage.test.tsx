import { screen } from '@testing-library/react';

import { appRender } from '../../../utils/Testing';

import ReviewsPage from './ReviewsPage';

describe('test page ReviewsPage', () => {
    test('should render title correctly', () => {
        appRender(<ReviewsPage/>);

        const title = screen.getByText(/all reviews/i);
        expect(title).toBeInTheDocument();
    });

    test('should not render false title', () => {
        appRender(<ReviewsPage/>);

        const title = screen.queryByText(/reviewing/i);
        expect(title).toBeNull();
    });
});