import { fireEvent, screen } from '@testing-library/react';

import { appRender } from '../../../utils/Testing';

import SignUp from './SignUp';

describe('test page SignUp', () => {
    test('should render correctly', () => {
        appRender(<SignUp/>);

        const title = screen.getByText(/sign up/i);
        expect(title).toBeInTheDocument();
    });

    test('should render by giving incorrect input data', () => {
        appRender(<SignUp/>);

        const title = screen.queryByText(/signin/i);
        expect(title).toBeNull();
    });

    test('should render input event element', () => {
        appRender(<SignUp/>);

        const emailElement = screen.getByPlaceholderText(/email/i);
        fireEvent.input(emailElement, {
            target: {
                value: '123123',
            },
        });
        expect(screen.getByTestId('email-element-test')).toHaveDisplayValue('123123');
        
    });
});