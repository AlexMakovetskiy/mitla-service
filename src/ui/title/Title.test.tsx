import { render, screen } from '@testing-library/react';

import Title from './Title';

describe('test ui component Title', () => {
    test('should render correctly', () => {
        render(<Title fontSize={24} lineHeight={26} fontWeight={500} content="Test string for test title component"/>);

        const title = screen.getByText(/test string for test title component/i);
        expect(title).toBeInTheDocument();
    });

    test('should render by giving incorrect input data', () => {
        render(<Title fontSize={0} lineHeight={0} fontWeight={0} content=""/>);

        const title = screen.getByTestId('title-text-all-purpose-element');
        expect(title).toBeInTheDocument();
    });
});