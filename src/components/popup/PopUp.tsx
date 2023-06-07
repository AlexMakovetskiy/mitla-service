import { useSelector, useDispatch } from 'react-redux/es/exports';

import { openingPopupSelector } from '../../store/selectors'; 
import { openPopupAction } from '../../store/actions';

import '../../style/reset.scss';
import '../../style/common.scss';
import './PopUp.scss';

function PopUp (props: { picture: string | undefined; }) {
    const isOpenPopup = useSelector(openingPopupSelector);
    const dispatch = useDispatch();

    function handleClosePopup () {
        return dispatch(openPopupAction(!!isOpenPopup ? false : true));
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