import { useParams } from 'react-router-dom';

import Title from '../../../components/title/Title';
import Review from '../../../components/review/Review';
import data from '../../../response_1668708166439.json';

import '../../../style/reset.scss'; 
import '../../../style/common.scss';
import './ReviewPage.scss';

const postsData = data.results;

function ReviewPage () {
    const params = useParams();
    const currentUserData = postsData.find(userData => userData.id === Number(params.id));

    return (
        <div className="review-page-wrap medium-container">
            <Title content="Review" fontWeight="700" fontSize="42" lineHeight="46"/>
            <Review data={currentUserData}/>
        </div>
    );
}

export default ReviewPage;