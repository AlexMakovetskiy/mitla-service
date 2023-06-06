import React from 'react';

import Review from '../Review/Review';

import '../../style/reset.scss';
import '../../style/common.scss';
import './ReviewList.scss';

class ReviewList extends React.Component {
    constructor (props) {
        super (props);
        this.state = props;
    }
    render () {
        return (
            <div className="reviews-wrap">
                <ul className="review-list-container">
                    {
                        this.state.data.map((reviewData, index) => {
                            if (index > this.state.elementCount)
                                return null;
                            return (
                                <li className="review-item" key={reviewData.id}>
                                    <div className="item-wrap">
                                        <Review data={reviewData} />
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ReviewList;