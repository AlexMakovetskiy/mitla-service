import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import { DisableMouseEventType, IReview } from '../../interfaces/pages/Main';
import { IReviewProps } from '../../interfaces/components/Props';
import PopUp from '../popup/PopUp';
import FavoritePostAction from '../favoritePostAction/FavoritePostAction';
import { openPopup } from '../../store/openPopup/PopupSlice';
import { setPicture } from '../../store/settingPicture/SettingPictureSlice';
import openingPopupSelector from '../../store/openPopup/OpeningPopupSelector';
import setPictureSelector from '../../store/settingPicture/SettingPictureSelector';
import { USER_PHOTO_BASE_USR } from '../../helpers/Review';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Review.scss';

const Review: FC<IReviewProps> = (props) => {
    const dispatch = useAppDispatch();
    const isOpenPopup = useAppSelector(openingPopupSelector);
    const userPhoto = useAppSelector(setPictureSelector);
    const params = useParams<{id: string}>();

    useEffect(() => {
        if(typeof props.data !== 'undefined')
            if(!!params.id)
                dispatch(setPicture(props.data.image));
    }, [dispatch, params.id, props.data]);

    if (typeof props.data !== 'undefined') {
        const reviewInfo: IReview = {
            title: props.data.title,
            date: props.data.date,
            text: props.data.text,
            image: !!props.data.image ? props.data.image : USER_PHOTO_BASE_USR,
            id: props.data.id,
            lesson_num: props.data.lesson_num,
            author: props.data.author,
        };

        let imageSource: string = reviewInfo.image;

        if (!imageSource) 
            imageSource = USER_PHOTO_BASE_USR;

        const openPreview = (event: DisableMouseEventType) => {
            event.preventDefault();
            if (!params.id)
                return null;
            return dispatch(openPopup(!isOpenPopup ? true : false)); 
        };

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

    else {
        return (
            <h2>Error getting data</h2>
        );
    }
};

export default Review;