import { screen } from '@testing-library/react';

import { appRender } from '../../../utils/Testing';

import ReviewPage from './ReviewPage';

describe('test page ReviewPage', () => {
    test('should render title correctly', () => {
        appRender(<ReviewPage/>);

        const title = screen.getByText(/review/i);
        expect(title).toBeInTheDocument();
    });

    test('should not render false title', () => {
        appRender(<ReviewPage/>);

        const title = screen.queryByText(/reviewing/i);
        expect(title).toBeNull();
    });

    test('should render error line correctly', () => {
        appRender(<ReviewPage/>);

        const errorTitle = screen.getByText(/Error getting data/i);
        expect(errorTitle).toBeInTheDocument();
    });
});