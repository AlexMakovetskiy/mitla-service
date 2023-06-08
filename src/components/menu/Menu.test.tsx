import { screen } from '@testing-library/react';

import { appRender } from '../../utils/Testing';

import Menu from './Menu';

describe('test component Menu', () => {
    test('should render title and favorites button correctly', () => {
        appRender(<Menu/>);

        const picture = screen.getByText(/menu/i);
        const favoritesAction = screen.getByTestId('favorites-action-test');
        expect(picture).toBeInTheDocument();
        expect(favoritesAction).toBeInTheDocument();
    });

    test('should render wrong title and favorites button incorrectly', () => {
        appRender(<Menu/>);

        const picture = screen.queryByText(/menu title/i);
        const favoritesAction = screen.queryByTestId('favorites-action-btn-test');
        expect(picture).toBeNull();
        expect(favoritesAction).toBeNull();
    });

});