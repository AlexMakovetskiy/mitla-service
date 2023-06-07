import { IReview } from '../../interfaces/pages/Main';

import Review from '../review/Review';

import '../../style/reset.scss';
import '../../style/common.scss';
import './ReviewList.scss';

function ReviewList (props: { reviews: IReview[]; elementCount: number; }) {
    const reviewsInfo = {
        reviews: props.reviews,
        elementCount: props.elementCount,
    };
    
    return (
        <div className="reviews-wrap">
            <ul className="review-list-container"> 
                {   reviewsInfo.reviews.map((reviewData: IReview, index: number) => {
                    if (index > reviewsInfo.elementCount)
                        return null;
                    return (
                        <li className="review-item" key={reviewData.id}>
                            <Review data={reviewData} />
                        </li>
                    );
                })
                }
            </ul>
        </div>
    );
}

export default ReviewList;