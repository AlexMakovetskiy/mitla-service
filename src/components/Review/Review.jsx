import React from 'react';

import { USER_PHOTO_BASE_USR } from '../../helpers/Review';

import './Review.scss';

class Review extends React.Component {
    constructor (props) {
        super(props);

        this.state = props;
    }
    
    render() {
        let imageSource = this.state.data.image;
        if (!imageSource) 
            imageSource = USER_PHOTO_BASE_USR;
        return (
            <div className="review-container">
                <div className="post-data">
                    <img src= {imageSource} alt="user" className="post-data__user-photo" />
                    <div className="user-data">
                        <h3 className="user-data__name">{this.state.data.title}</h3>
                        <p className="user-data__post-date">{this.state.data.date}</p>
                    </div>
                </div>
                <p className="review-container__content">{this.state.data.text}</p>
            </div>
        );
    }
}

export default Review;