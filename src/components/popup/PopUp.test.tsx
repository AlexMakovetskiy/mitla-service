import { screen } from '@testing-library/react';

import { appRender } from '../../utils/Testing';
import { USER_PHOTO_BASE_USR } from '../../utils/Review';

import PopUp from './PopUp';


describe('test component PopUp', () => {
    test('should render picture and cancel button correctly', () => {
        appRender(<PopUp picture={USER_PHOTO_BASE_USR} classTitle="popup-activated"/>);

        const picture = screen.getByTestId('logo-popup-element');
        const title = screen.getByText(/cancel/i);
        expect(picture).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });

    test('should render picture and cancel button incorrectly', () => {
        appRender(<PopUp picture="" classTitle="popup-activated"/>);

        const picture = screen.queryByTestId('logo-popup-element');
        const title = screen.queryByText(/canceled/i);
        expect(picture).not.toHaveStyle('height: 225px;');
        expect(title).toBeNull();
    });
});