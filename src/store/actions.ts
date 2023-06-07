import { OPEN_POPUP, SET_PICTURE } from './action-types';


const openPopupAction = (isOpenPopup: boolean) => ({
    type: OPEN_POPUP,
    payload: isOpenPopup,
});

const setPictureAction = (pictureUrl: string) => ({
    type: SET_PICTURE,
    payload: pictureUrl,
});

export { openPopupAction, setPictureAction };