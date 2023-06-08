import { render, screen } from '@testing-library/react';

import SearchPage from './SearchPage'; 

describe('test page SearchPage', () => {
    test('should render correctly', () => {
        render(<SearchPage searchLine="testline"/>);

        const title = screen.getByText(/testline/i);
        const subtitle = screen.getByText(/search/i);
        expect(title).toBeInTheDocument();
        expect(subtitle).toBeInTheDocument();
    });

    test('should render by giving incorrect input data', () => {
        render(<SearchPage searchLine="test"/>);

        const title = screen.queryByText('data');
        expect(title).toBeNull();
    });
});