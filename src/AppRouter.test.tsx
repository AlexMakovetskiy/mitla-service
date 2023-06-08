import { fireEvent, screen } from '@testing-library/react';

import { appRender } from './utils/Testing';

import App from './App';

describe('test page App', () => {
    test('should render correctly', () => {
        appRender(<App/>);

        const orderTitle = screen.getByText(/order apartment cleaning/i);
        const orderSubtitle = screen.getByText(/the service includes cleaning of the room, kitchen, bathroom and corridor/i);
        const reviewsElement = screen.getByText(/results not found/i);
        const serviceTitle = screen.getByText(/our services/i);
        const headerElement = screen.getByText(/partners/i);
        const footerElement = screen.getByText(/policy cookies/i);

        expect(orderTitle).toBeInTheDocument();
        expect(orderSubtitle).toBeInTheDocument();
        expect(reviewsElement).toBeInTheDocument();
        expect(serviceTitle).toBeInTheDocument();
        expect(headerElement).toBeInTheDocument();
        expect(footerElement).toBeInTheDocument();
    });

    test('should render by giving incorrect input data', () => {
        appRender(<App/>);

        const orderTitle = screen.queryByText(/order apartments cleaning/i);
        const orderSubtitle = screen.queryByText(/the service includes cleaning of the rooms, kitchen, bathroom and corridor/i);
        const reviewsTitle = screen.queryByText(/reviewing/i);
        const serviceTitle = screen.queryByText(/ours services/i);
        const headerElement = screen.queryByText(/servicing/i);
        const footerElement = screen.queryByText(/policy cooky/i);

        expect(orderTitle).toBeNull();
        expect(orderSubtitle).toBeNull();
        expect(reviewsTitle).toBeNull();
        expect(serviceTitle).toBeNull();
        expect(headerElement).toBeNull();
        expect(footerElement).toBeNull();
    });

    test('should router test work correctly', () => {
        appRender(<App/>);

        const searchPageLink = screen.getByTestId('search-btn-header');
        const mainPageLink = screen.getByTestId('company-logo-header');
        fireEvent.click(searchPageLink);

        expect(screen.getByTestId('search-results-test')).toBeInTheDocument();
        fireEvent.click(mainPageLink);

        expect(screen.getByTestId('rooms-title-test')).toBeInTheDocument();
    });
});