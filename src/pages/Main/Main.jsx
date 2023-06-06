import React from 'react';
import { Link } from 'react-router-dom';

import Services from '../../components/Services/Services';
import Title from '../../components/Title/Title';
import ReviewList from '../../components/ReviewList/ReviewList';
import data from '../../response_1668708166439.json';

import '../../style/reset.scss'; 
import '../../style/common.scss'; 
import './Main.scss';

const postsData = data.results;

class Main extends React.Component {
    constructor () {
        super('');

        this.state = {
            roomCount: 0,
            bathroomCount: 0,
        };
    }

    increaseRoomCount = () => {
        this.setState({roomCount: this.state.roomCount + 1});
    };

    decreaseRoomCount = () => {
        if (this.state.roomCount !== 0)
            return this.setState({roomCount: this.state.roomCount - 1});
    };

    increaseBathRoomCount = () => {
        this.setState({bathroomCount: this.state.bathroomCount + 1});
    };

    decreaseBathRoomCount = () => {
        if (this.state.bathroomCount !== 0)
            return this.setState({bathroomCount: this.state.bathroomCount - 1});
    };

    if () {

    }
    render () {
        return (
            <main className="main-page large-container">
                <div className="order-wrapper large-container">
                    <div className="bid-wrap medium-container">
                        <Title content="Order apartment cleaning" fontSize={80} fontWeight={700} lineHeight={72}/>
                        <Title content="The service includes cleaning of the room, kitchen, bathroom and corridor" fontSize={32} fontWeight={400} lineHeight={44}/>
                        <div className="calculation">
                            <div className="rooms">
                                <button className="decrease-room-count" onClick={this.decreaseRoomCount}>
                                    <img src="/assets/vector/order/calculation/decrease.svg" alt="decrease count" className="decrease-room-count__logo"/>
                                </button>
                                <p className="rooms__title">{this.state.roomCount} room</p>
                                <button className="increase-room-count" onClick={this.increaseRoomCount}>
                                    <img src="/assets/vector/order/calculation/increase.svg" alt="increase count" className="increase-room-count__logo"/>
                                </button>
                            </div>
                            <div className="bathrooms">
                                <button className="decrease-bathroom-count" onClick={this.decreaseBathRoomCount}>
                                    <img src="/assets/vector/order/calculation/decrease.svg" alt="decrease count" className="decrease-bathroom-count__logo"/>
                                </button>
                                <p className="bathrooms__title">{this.state.bathroomCount} bathroom</p>
                                <button className="increase-bathroom-count" onClick={this.increaseBathRoomCount}>
                                    <img src="/assets/vector/order/calculation/increase.svg" alt="increase count" className="increase-bathroom-count__logo"/>
                                </button>
                            </div>
                            <button className="calculation__get-price-action">Get price →</button>
                        </div>
                    </div>
                </div>
                <div className="posts-wrap">
                    <Title content="Reviews" fontSize={70} fontWeight={700} lineHeight={76}/>
                    <div className="posts-container medium-container">
                        <ReviewList data={postsData} elementCount="3"/>
                        <div className="action-kit">
                            <Link to={'/notfound'}>
                                <div className="action-kit__link action-kit__own-review">Leave your review →</div>
                            </Link>
                            <Link to={'/allreviews'}>
                                <div className="action-kit__link action-kit__all-reviews">All reviews →</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Services/>
            </main>
        );
    }
}

export default Main;