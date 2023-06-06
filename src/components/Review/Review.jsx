import React from 'react';
import { Link } from 'react-router-dom';

import { USER_PHOTO_BASE_USR } from '../../helpers/Review';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Review.scss';


class Review extends React.Component {
    // first lifecycle method of react class components
    // the constructor is working with  props and initialization of state 
    constructor (props) {
        super(props);

        this.state = props;
    }

    // static getDerivedStateFromProps() second lifecycle method. almost unusable
    
    // render method works with class markup
    render() {
        let imageSource = this.state.data.image;
        const reviewID = this.state.data.id;
        if (!imageSource) 
            imageSource = USER_PHOTO_BASE_USR;
        return (
            <div className="review-container">
                <div className="post-data">
                    <img src= {imageSource} alt="user" className="post-data__user-photo" />
                    <div className="user-data">
                        <h3 className="user-data__name">{this.state.data.title}</h3>
                        <Link to={`/review/${reviewID}`}>
                            <p className="user-data__post-date">{this.state.data.date}</p>
                        </Link>
                    </div>
                </div>
                <p className="review-container__content">{this.state.data.text}</p>
            </div>
        );
    }

    // componentDidMount() 
    // this method allows to work with server requests, async operations etc...
}

export default Review;