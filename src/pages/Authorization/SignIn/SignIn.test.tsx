import { fireEvent, screen } from '@testing-library/react';

import { appRender } from '../../../utils/Testing';

import SignIn from './SignIn';

describe('test page SignIn', () => {
    test('should render correctly', () => {
        appRender(<SignIn/>);

        const title = screen.getByText(/sign in/i);
        expect(title).toBeInTheDocument();
    });

    test('should render by giving incorrect input data', () => {
        appRender(<SignIn/>);

        const title = screen.queryByText(/signin/i);
        expect(title).toBeNull();
    });

    test('should render input event element', () => {
        appRender(<SignIn/>);

        const emailElement = screen.getByPlaceholderText(/email/i);
        fireEvent.input(emailElement, {
            target: {
                value: '123123',
            },
        });
        expect(screen.getByTestId('signin-email')).toHaveDisplayValue('123123');
        
    });
});