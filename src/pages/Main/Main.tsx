import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PROJECT_BASE_URL } from '../../helpers/Main';
import Services from '../../components/services/Services';
import Title from '../../components/title/Title';
import ReviewList from '../../components/reviewList/ReviewList';
import { setReviewsData } from '../../store/gettingReviews/ReviewsSlice';
import useDispatchTyped from '../../hooks/useDispatchTyped';

import '../../style/reset.scss'; 
import '../../style/common.scss'; 
import './Main.scss';


function Main () {
    const [roomCount, setRoomCount] = useState(0);
    const [bathroomCountCount, setBathroomCountCount] = useState(0);
    const [reviewArray, setReviewArray] = useState([]);
    const dispatch = useDispatchTyped();

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(PROJECT_BASE_URL);
            const reviews = await response.json();
            dispatch(setReviewsData(reviews));
            return setReviewArray(reviews);
        };
        fetchReviews();
    });


    function increaseRoomCount () {
        return setRoomCount((prevState) => prevState + 1);
    }

    function decreaseRoomCount () {
        if (roomCount !== 0)
            return setRoomCount(roomCount - 1);
    }

    function increaseBathRoomCount () {
        return setBathroomCountCount((prevState) => prevState + 1);
    }

    function decreaseBathRoomCount () {
        if (bathroomCountCount !== 0)
            return setBathroomCountCount(bathroomCountCount - 1);
    }

    if (!reviewArray.length) {
        return (
            <h1>loading</h1>
        );
    }

    return (
        <main className="main-page large-container">
            <div className="order-wrapper large-container">
                <div className="bid-wrap medium-container">
                    <Title content="Order apartment cleaning" fontSize={80} fontWeight={700} lineHeight={72}/>
                    <Title content="The service includes cleaning of the room, kitchen, bathroom and corridor" fontSize={32} fontWeight={400} lineHeight={44}/>
                    <div className="calculation">
                        <div className="rooms">
                            <button className="decrease-room-count" onClick={decreaseRoomCount}>
                                <img src="/assets/vector/order/calculation/decrease.svg" alt="decrease count" className="decrease-room-count__logo"/>
                            </button>
                            <p className="rooms__title">{roomCount} room</p>
                            <button className="increase-room-count" onClick={increaseRoomCount}>
                                <img src="/assets/vector/order/calculation/increase.svg" alt="increase count" className="increase-room-count__logo"/>
                            </button>
                        </div>
                        <div className="bathrooms">
                            <button className="decrease-bathroom-count" onClick={decreaseBathRoomCount}>
                                <img src="/assets/vector/order/calculation/decrease.svg" alt="decrease count" className="decrease-bathroom-count__logo"/>
                            </button>
                            <p className="bathrooms__title">{bathroomCountCount} bathroom</p>
                            <button className="increase-bathroom-count" onClick={increaseBathRoomCount}>
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
                    <ReviewList reviews={reviewArray} elementCount={3}/>
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

export default Main;