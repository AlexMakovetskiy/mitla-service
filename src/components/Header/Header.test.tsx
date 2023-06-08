import { fireEvent, screen } from '@testing-library/react';

import { appRender } from '../../utils/Testing';

import Header from './Header';

describe('test component Header', () => {
    test('should be render correct text', () => {
        appRender(<Header/>);

        const serviceTitle = screen.getByText(/cleaning after repair/i);
        const number = screen.getByText('+48 797 524 604');
        const partnersAction = screen.getByText(/partners/i);
        expect(serviceTitle).toBeInTheDocument();
        expect(number).toBeInTheDocument();
        expect(partnersAction).toBeInTheDocument();
    });

    test('should be not render incorrect text', () => {
        appRender(<Header/>);

        const serviceTitle = screen.queryByText(/cleaned while repairing/i);
        const number = screen.queryByText('+48 7f 524 604');
        const partnersAction = screen.queryByText(/partnering/i);
        expect(serviceTitle).toBeNull();
        expect(number).toBeNull();
        expect(partnersAction).toBeNull();
    });

    test('should be working transitions from the main page to the search page', () => {
        appRender(<Header/>);

        const themeButton = screen.getByTestId('theme-action-button');
        expect(themeButton).toBeInTheDocument();
        fireEvent.click(themeButton);
        const headerElement = screen.queryByTestId('header-wrapper-container');
        expect(headerElement).toHaveStyle('background: var(--color-background-theme);');
    });
});
