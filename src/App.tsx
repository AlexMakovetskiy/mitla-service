import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Title from './components/Title/Title';
import ReviewList from './components/ReviewList/ReviewList';
import data from './response_1668708166439.json';

import './style/reset.scss';
import './style/common.scss';
import './App.scss';

const postsData = data.results;


class App extends React.Component {
    render () {
        return (
            <div className="mitla-wrapper">
                <Header/>
                <div className="order-wrapper large-container">
                    <div className="bid-wrap medium-container">
                        <Title content="Order apartment cleaning" fontSize={80} fontWeight={700} lineHeight={72}/>
                        <Title content="The service includes cleaning of the room, kitchen, bathroom and corridor" fontSize={32} fontWeight={400} lineHeight={44}/>
                        <div className="calculation">
                            <div className="rooms">
                                <button className="decrease-room-count">
                                    <img src="/assets/vector/order/calculation/decrease.svg" alt="decrease count" className="decrease-room-count__logo"/>
                                </button>
                                <p className="rooms__title">1 room</p>
                                <button className="increase-room-count">
                                    <img src="/assets/vector/order/calculation/increase.svg" alt="increase count" className="increase-room-count__logo"/>
                                </button>
                            </div>
                            <div className="bathrooms">
                                <button className="decrease-bathroom-count">
                                    <img src="/assets/vector/order/calculation/decrease.svg" alt="decrease count" className="decrease-bathroom-count__logo"/>
                                </button>
                                <p className="bathrooms__title">1 bathroom</p>
                                <button className="increase-bathroom-count">
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
                        <ReviewList data={postsData}/>
                        <div className="action-kit">
                            <a href="https://www.google.com" className="action-kit__link action-kit__own-review" target="_blank" rel="noreferrer">Leave your review →</a>
                            <a href="https://www.google.com" className="action-kit__link action-kit__all-reviews" target="_blank" rel="noreferrer">All reviews →</a>
                        </div>
                    </div>
                </div>
                <Services/>
                <Footer/>
            </div>
        );
    }
}

export default App;