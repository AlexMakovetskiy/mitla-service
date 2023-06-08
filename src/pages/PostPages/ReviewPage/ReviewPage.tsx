import { FC } from 'react';
import { useParams } from 'react-router-dom';

import useAppSelector from '../../../hooks/useAppSelector';

import Title from '../../../components/title/Title';
import Review from '../../../components/review/Review';
import { reviewListSelector } from '../../../store/gettingReviews/ReviewsSelector';

import '../../../style/reset.scss'; 
import '../../../style/common.scss';
import './ReviewPage.scss';

const ReviewPage: FC = () => {
    const params = useParams();
    const reviewList = useAppSelector(reviewListSelector);
    const currentUserData = reviewList.find(userData => userData.id === Number(params.id));

    return (
        <div className="review-page-wrap medium-container">
            <Title content="Review" fontWeight="700" fontSize="42" lineHeight="46"/>
            <Review data={currentUserData}/>
        </div>
    );
};

export default ReviewPage;