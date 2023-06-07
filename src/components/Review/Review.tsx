import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import useDispatchTyped from '../../hooks/useDispatchTyped';
import useSelectorTyped from '../../hooks/useSelectorTyped';

import { IReview } from '../../interfaces/pages/Main';

import { USER_PHOTO_BASE_USR } from '../../helpers/Review';
import PopUp from '../popup/PopUp';
import FavoritePostAction from '../favoritePostAction/FavoritePostAction';
import { openPopup } from '../../store/openPopup/PopupSlice';
import { setPicture } from '../../store/settingPicture/SettingPictureSlice';
import openingPopupSelector from '../../store/openPopup/OpeningPopupSelector';
import setPictureSelector from '../../store/settingPicture/SettingPictureSelector';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Review.scss';

function Review (props: any) {
    const dispatch = useDispatchTyped();
    const isOpenPopup = useSelectorTyped(openingPopupSelector);
    const userPhoto = useSelectorTyped(setPictureSelector);
    const params = useParams();

    useEffect(() => {
        if(params.id)
            dispatch(setPicture(props.data.image));
    }, [dispatch, params.id, props.data.image]);

    const reviewInfo: IReview = {
        title: props.data.title,
        date: props.data.date,
        text: props.data.text,
        image: props.data.image,
        id: props.data.id,
        lesson_num: props.data.lesson_num,
        author: props.data.author,
    };
    
    let imageSource = reviewInfo.image;

    if (!imageSource) 
        imageSource = USER_PHOTO_BASE_USR;
    
    function openPreview () {
        if (!params.id)
            return null;
        return dispatch(openPopup(!isOpenPopup ? true : false)); 
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
                <FavoritePostAction postData={reviewInfo}/>
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