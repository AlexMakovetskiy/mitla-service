import { render, screen } from '@testing-library/react';

import Loading from './Loading';

describe('test ui component Loading', () => {
    test('should render correctly', () => {
        render(<Loading/>);

        const title = screen.getByText(/loading.../i);
        expect(title).toBeInTheDocument();
    });

    test('should render by giving incorrect input data', () => {
        render(<Loading/>);

        const title = screen.queryByText(/loaded page/i);
        expect(title).toBeNull();
    });
});