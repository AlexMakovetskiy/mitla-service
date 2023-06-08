import { IReview } from '../../interfaces/pages/Main';

interface IFavoritePostsState {
    favoritePosts: IReview[];
}

interface IReviewsInitialState {
    reviews: IReview[],
    loading: boolean,
    error: null | string | unknown,
}

interface IPopupInitialState {
    isOpen: boolean
}

interface IPictureInitialState {
    pictureSrc: string
}

interface IUserInfoInitialState {
    email: string,
    accessToken: string,
    refreshToken: string,
    isActivated: boolean,
    loading: boolean,
    error: null | string | unknown,
}

interface IBDUserData {
    email: string,
    id: string,
    isActivated: boolean,
}

interface IUserResponseInfo {
    accessToken: string
    refreshToken: string,
    user: IBDUserData
}

export type {
    IFavoritePostsState,
    IReviewsInitialState,
    IPopupInitialState,
    IPictureInitialState,
    IUserInfoInitialState,
    IUserResponseInfo,
};