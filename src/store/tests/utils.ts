import { storeStateType } from '..';

const mockState: storeStateType = {
    popupSlice: {
        isOpen: false,
    },
    settingPictureSlice: {
        pictureSrc: '',
    },
    ReviewListSlice: {
        reviews: [],
        loading: false,
        error: null,
    },
    favoritePostsSlice: {
        favoritePosts: [],
    },
    UserInfoSlice: {
        email: '',
        accessToken: '',
        refreshToken: '',
        isActivated: false,
        loading: false,
        error: null,
    },
};

export default mockState;