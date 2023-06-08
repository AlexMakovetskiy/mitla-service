import { FC } from 'react';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import { DisableMouseEventType } from '../../interfaces/pages/Main';
import { IPopUpProps } from '../../interfaces/components/Props';
import openingPopupSelector from '../../store/openPopup/OpeningPopupSelector'; 
import { openPopup } from '../../store/openPopup/PopupSlice';

import '../../style/reset.scss';
import '../../style/common.scss';
import './PopUp.scss';

const PopUp: FC<IPopUpProps> = (props) => {
    const isOpenPopup = useAppSelector(openingPopupSelector);
    const dispatch = useAppDispatch();

    function handleClosePopup (event: DisableMouseEventType) {
        event.preventDefault();
        return dispatch(openPopup(!!isOpenPopup ? false : true));
    }

    return (
        <div className="popup-box-container">
            <div className="popup-window-wrapper">
                <img 
                    src={props.picture}
                    alt="logo" 
                    className="popup-window-wrapper__logo" 
                />
                <button className="popup-window-wrapper__popup-action custom-btn" onClick={handleClosePopup}>cancel</button>
            </div>
        </div>
    );
};

export default PopUp;