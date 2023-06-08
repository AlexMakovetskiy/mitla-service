import openingPopupSelector from '../../openPopup/OpeningPopupSelector';
import mockState from '../utils';

describe('test openingPopupSelector', () => {
    test('should work with filled state', () => {
        mockState.popupSlice.isOpen = false;
        expect(openingPopupSelector(mockState)).toEqual(false);
    });

    test('should work with empty state', () => {
        mockState.popupSlice.isOpen = true;
        expect(openingPopupSelector(mockState)).toEqual(true);
    });
});