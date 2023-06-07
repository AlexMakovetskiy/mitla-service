import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { USER_PHOTO_BASE_USR } from '../../helpers/Review';
import PopUp from '../popup/PopUp';
import { openingPopupSelector, setPictureSelector } from '../../store/selectors';
import { openPopupAction, setPictureAction } from '../../store/actions';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Review.scss';

function Review (props: any) {
    const dispatch = useDispatch();
    const isOpenPopup = useSelector(openingPopupSelector);
    const userPhoto = useSelector(setPictureSelector);
    const params = useParams();

    useEffect(() => {
        if(params.id)
            dispatch(setPictureAction(props.data.image));
    }, [dispatch, params.id, props.data.image]);

    const reviewInfo = {
        title: props.data.title,
        date: props.data.date,
        text: props.data.text,
        image: props.data.image,
        id: props.data.id,
    };

    let imageSource = reviewInfo.image;

    if (!imageSource) 
        imageSource = USER_PHOTO_BASE_USR;
    
    function openPreview () {
        if (!params.id)
            return null;
        return dispatch(openPopupAction(!isOpenPopup ? true : false)); 
    }
    
    return (
        <div className="review-container">
            <div className="post-data">
                <img src= {imageSource} alt="user" className="post-data__user-photo" onClick={openPreview}/>
                <div className="user-data">
                    <h3 className="user-data__name">{reviewInfo.title}</h3>
                    <Link to={`/review/${reviewInfo.id}`}>
                        <p className="user-data__post-date">{reviewInfo.date}</p>
                    </Link>
                </div>
            </div>
            <p className="review-container__content">{reviewInfo.text}</p>
            {
                !!isOpenPopup && 
                <PopUp picture={userPhoto}/>
            }
        </div>
    );
}

export default Review;