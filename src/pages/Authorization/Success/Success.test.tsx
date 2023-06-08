import { render, screen } from '@testing-library/react';

import Success from './Success';

describe('test page Success', () => {
    test('should render correctly', () => {
        render(<Success/>);

        const title = screen.getByText(/sign in process was successful!/i);
        expect(title).toBeInTheDocument();
    });

    test('should render by giving incorrect input data', () => {
        render(<Success/>);

        const title = screen.queryByText(/signin/i);
        expect(title).toBeNull();
    });
});