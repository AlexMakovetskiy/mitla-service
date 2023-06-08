import { USER_PHOTO_BASE_USR } from '../../../utils/Review';
import SettingPictureSlice, { setPicture } from '../../settingPicture/SettingPictureSlice';

describe('test SettingPictureSlice reducers', () => {
    const testPicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71R0RbJJD-vUKz1BBPgh2RvUjb9MhP2DUbvVhS4O1eRBrm-kAkPW-qRFmMrA6rhz-DrY&usqp=CAU';

    test('setPicture should works correctly', () => {
        expect(SettingPictureSlice({pictureSrc: USER_PHOTO_BASE_USR}, setPicture(testPicture))).toEqual({ pictureSrc: testPicture });
    });

    test('setPicture should works incorrectly', () => {
        expect(SettingPictureSlice({pictureSrc: USER_PHOTO_BASE_USR}, setPicture(''))).toEqual({pictureSrc: ''});
    });
});