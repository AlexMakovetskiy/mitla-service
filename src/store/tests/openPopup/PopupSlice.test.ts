import PopupSlice, { openPopup } from '../../openPopup/PopupSlice';

describe('test PopupSlice reducers', () => {
    test('openPopup should works correctly with right legal type', () => {
        expect(PopupSlice({isOpen: false}, openPopup(true))).toEqual({isOpen: true});
    });

    test('openPopup should works incorrectly with with type conversion', () => {
        expect(PopupSlice({isOpen: Boolean(0)}, openPopup(Boolean('1')))).toEqual({isOpen: true});
    });
});
