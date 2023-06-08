import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('test component Footer', () => {
    test('should render picture correctly', () => {
        render(<Footer/>);

        const picture = screen.getByTestId('requisites-logo');
        expect(picture).toBeInTheDocument();
    });

    test('should render title correctly', () => {
        render(<Footer/>);

        const title = screen.getByText(/cleaning after renovation/i);
        expect(title).toBeInTheDocument();
    });
});