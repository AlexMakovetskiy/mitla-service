import { useParams } from 'react-router-dom';

import useSelectorTyped from '../../../hooks/useSelectorTyped';

import Title from '../../../components/title/Title';
import Review from '../../../components/review/Review';
import reviewListSelector from '../../../store/gettingReviews/ReviewsSelector';

import '../../../style/reset.scss'; 
import '../../../style/common.scss';
import './ReviewPage.scss';


function ReviewPage () {
    const params = useParams();
    const reviewList = useSelectorTyped(reviewListSelector);
    const currentUserData = reviewList.find(userData => userData.id === Number(params.id));


    return (
        <div className="review-page-wrap medium-container">
            <Title content="Review" fontWeight="700" fontSize="42" lineHeight="46"/>
            <Review data={currentUserData}/>
        </div>
    );
}

export default ReviewPage;