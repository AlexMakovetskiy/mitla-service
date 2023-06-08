import { render, screen } from '@testing-library/react';

import Services from './Services';

describe('test component Services', () => {
    test('should render picture', () => {
        render(<Services/>);

        const picture = screen.getByTestId('logo-standard-cleaning');
        expect(picture).toBeInTheDocument();
    });

    test('should render random title', () => {
        render(<Services/>);
        
        const title = screen.getByText(/standard cleaning/i);
        expect(title).toBeInTheDocument();
    });

    test('should render ui component title', () => {
        render(<Services/>);
        
        const uiTitle = screen.getByText(/Our services/i);
        expect(uiTitle).toBeInTheDocument();
    });
});