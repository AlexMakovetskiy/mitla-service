import { FC } from 'react';

import useAppSelector from '../../../hooks/useAppSelector';

import Title from '../../../ui/title/Title';
import ReviewList from '../../../components/reviewList/ReviewList';
import { reviewListSelector } from '../../../store/gettingReviews/ReviewsSelector';

import '../../../style/reset.scss'; 
import '../../../style/common.scss';
import './ReviewsPage.scss';

const ReviewsPage: FC = () => {
    const reviewsData = useAppSelector(reviewListSelector);

    return (
        <div className="reviews-page-wrap medium-container">
            <Title content="All reviews" fontWeight="700" fontSize="42" lineHeight="46"/>
            <ReviewList reviews={reviewsData} elementCount={reviewsData.length-1}/>
        </div>
    );
};

export default ReviewsPage;