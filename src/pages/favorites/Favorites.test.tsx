import { screen } from '@testing-library/react';

import { appRender } from '../../utils/Testing';

import Favorites from './Favorites';

describe('test page Favorites', () => {
    test('should render empty page data correctly', () => {
        appRender(<Favorites/>);

        const title = screen.getByText(/your favorite posts/i);
        const subtitle = screen.getByText(/there are no posts in favorites!/i);
        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
    });

    test('should render empty page data incorrectly', () => {
        appRender(<Favorites/>);

        const title = screen.queryByText(/posting/i);
        expect(title).toBeNull();
    });

});