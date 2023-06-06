import React from 'react';

import Title from '../../../components/Title/Title';
import ReviewList from '../../../components/ReviewList/ReviewList';
import data from '../../../response_1668708166439.json';


import '../../../style/reset.scss'; 
import '../../../style/common.scss';
import './ReviewsPage.scss';

const postsData = data.results;

class ReviewsPage extends React.Component {
    render () {
        return (
            <div className="reviews-page-wrap medium-container">
                <Title content="All reviews" fontWeight="700" fontSize="42" lineHeight="46"/>
                <ReviewList data={postsData} elementCount={postsData.length-1}/>
            </div>
        );
    }
}

export default ReviewsPage;