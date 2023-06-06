/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { USER_PHOTO_BASE_USR } from '../../helpers/Review';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Review.scss';

function Review (props: any) {
    const [state, setState] = useState({
        title: props.data.title,
        date: props.data.date,
        text: props.data.text,
        image: props.data.image,
        id: props.data.id,
    });

    let imageSource = state.image;
    if (!imageSource) 
        imageSource = USER_PHOTO_BASE_USR;
    
    return (
        <div className="review-container">
            <div className="post-data">
                <img src= {imageSource} alt="user" className="post-data__user-photo" />
                <div className="user-data">
                    <h3 className="user-data__name">{state.title}</h3>
                    <Link to={`/review/${state.id}`}>
                        <p className="user-data__post-date">{state.date}</p>
                    </Link>
                </div>
            </div>
            <p className="review-container__content">{state.text}</p>
        </div>
    );
}

export default Review;