/* eslint-disable @typescript-eslint/no-unused-vars */
import { Key, useState } from 'react';

import Review from '../Review/Review';

import '../../style/reset.scss';
import '../../style/common.scss';
import './ReviewList.scss';

function ReviewList (props: any) {
    const [state, setState] = useState({
        reviews: props.reviews,
        elementCount: props.elementCount,
    });
    
    return (
        <div className="reviews-wrap">
            <ul className="review-list-container"> 
                {   state.reviews.map((reviewData: { id: Key | null | undefined; }, index: number) => {
                    if (index > state.elementCount)
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