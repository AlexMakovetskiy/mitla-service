import { render, screen } from '@testing-library/react';

import NotFound from './NotFound';

describe('test page SearchPage', () => {
    test('should render correctly', () => {
        render(<NotFound/>);

        const title = screen.getByText(/error 404/i);
        expect(title).toBeInTheDocument();
    });

    test('should render by giving incorrect input data', () => {
        render(<NotFound/>);

        const title = screen.queryByText(/401/i);
        expect(title).toBeNull();
    });
});