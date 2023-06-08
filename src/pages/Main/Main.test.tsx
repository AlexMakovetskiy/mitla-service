import { fireEvent, screen } from '@testing-library/react';

import { appRender } from '../../utils/Testing';

import Main from './Main';

describe('test page Main', () => {
    test('should render correctly', () => {
        appRender(<Main/>);

        const orderTitle = screen.getByText(/order apartment cleaning/i);
        const orderSubtitle = screen.getByText(/the service includes cleaning of the room, kitchen, bathroom and corridor/i);
        const reviewsElement = screen.getByText(/results not found/i);
        const serviceTitle = screen.getByText(/our services/i);

        expect(orderTitle).toBeInTheDocument();
        expect(orderSubtitle).toBeInTheDocument();
        expect(reviewsElement).toBeInTheDocument();
        expect(serviceTitle).toBeInTheDocument();
    });

    test('should render by giving incorrect input data', () => {
        appRender(<Main/>);

        const orderTitle = screen.queryByText(/order apartments cleaning/i);
        const orderSubtitle = screen.queryByText(/the service includes cleaning of the rooms, kitchen, bathroom and corridor/i);
        const reviewsTitle = screen.queryByText(/reviewing/i);
        const serviceTitle = screen.queryByText(/ours services/i);
        expect(orderTitle).toBeNull();
        expect(orderSubtitle).toBeNull();
        expect(reviewsTitle).toBeNull();
        expect(serviceTitle).toBeNull();
    });

    test('should render input event element', () => {
        appRender(<Main/>);

        const increaseElement = screen.getByTestId('increase-room-count-action-test');
        fireEvent.click(increaseElement);
        expect(screen.getByTestId('rooms-title-test')).toContainHTML('1 room');
        
    });
});