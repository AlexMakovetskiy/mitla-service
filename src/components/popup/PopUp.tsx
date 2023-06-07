import useDispatchTyped from '../../hooks/useDispatchTyped';
import useSelectorTyped from '../../hooks/useSelectorTyped';

import openingPopupSelector from '../../store/openPopup/OpeningPopupSelector'; 
import { openPopup } from '../../store/openPopup/PopupSlice';

import '../../style/reset.scss';
import '../../style/common.scss';
import './PopUp.scss';

function PopUp (props: { picture: string | undefined; }) {
    const isOpenPopup = useSelectorTyped(openingPopupSelector);
    const dispatch = useDispatchTyped();

    function handleClosePopup () {
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
}

export default PopUp;