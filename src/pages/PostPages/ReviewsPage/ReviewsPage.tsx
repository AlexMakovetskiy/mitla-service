import Title from '../../../components/title/Title';
import ReviewList from '../../../components/reviewList/ReviewList';
import data from '../../../response_1668708166439.json';

import '../../../style/reset.scss'; 
import '../../../style/common.scss';
import './ReviewsPage.scss';

const postsData = data.results;

function ReviewsPage () {
    return (
        <div className="reviews-page-wrap medium-container">
            <Title content="All reviews" fontWeight="700" fontSize="42" lineHeight="46"/>
            <ReviewList reviews={postsData} elementCount={postsData.length-1}/>
        </div>
    );
}

export default ReviewsPage;