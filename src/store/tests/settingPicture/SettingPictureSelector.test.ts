// import openingPopupSelector from '../../openPopup/OpeningPopupSelector';
import { USER_PHOTO_BASE_USR } from '../../../utils/Review';
import setPictureSelector from '../../settingPicture/SettingPictureSelector';
import mockState from '../utils';

describe('test setPictureSelector', () => {
    test('should work with filled state', () => {
        mockState.settingPictureSlice.pictureSrc = USER_PHOTO_BASE_USR;
        expect(setPictureSelector(mockState)).toEqual(USER_PHOTO_BASE_USR);
    });

    test('should work with empty state', () => {
        mockState.settingPictureSlice.pictureSrc ='';
        expect(setPictureSelector(mockState)).toEqual('');
    });
});