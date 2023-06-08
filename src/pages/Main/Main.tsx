import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

import { DisableMouseEventType } from '../../interfaces/pages/Main';
import Services from '../../components/services/Services';
import Title from '../../ui/title/Title';
import Loading from '../../ui/loading/Loading';
import ReviewList from '../../components/reviewList/ReviewList';
import { getReviews } from '../../store/gettingReviews/ReviewsThunk';
import { reviewsLoadingSelector, reviewListSelector } from '../../store/gettingReviews/ReviewsSelector';

import '../../style/reset.scss'; 
import '../../style/common.scss'; 
import './Main.scss';

const Main: FC = () => {
    const [roomCount, setRoomCount] = useState<number>(0);
    const [bathroomCountCount, setBathroomCountCount] = useState<number>(0);
    const dispatch = useAppDispatch();
    const loading = useAppSelector(reviewsLoadingSelector);
    const reviews = useAppSelector(reviewListSelector);

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);

    function increaseRoomCount (event: DisableMouseEventType) {
        event.preventDefault();
        return setRoomCount((prevState) => prevState + 1);
    }

    function decreaseRoomCount (event: DisableMouseEventType) {
        event.preventDefault();
        if (roomCount !== 0)
            return setRoomCount(roomCount - 1);
    }

    function increaseBathRoomCount (event: DisableMouseEventType) {
        event.preventDefault();
        return setBathroomCountCount((prevState) => prevState + 1);
    }

    function decreaseBathRoomCount (event: DisableMouseEventType) {
        event.preventDefault();
        if (bathroomCountCount !== 0)
            return setBathroomCountCount(bathroomCountCount - 1);
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
                            <p className="rooms__title" data-testid="rooms-title-test">{roomCount} room</p>
                            <button className="increase-room-count" onClick={increaseRoomCount} data-testid="increase-room-count-action-test">
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
                    {
                        !!loading ?
                            <Loading/> :
                            <ReviewList reviews={reviews} elementCount={3}/>
                    }
                    {
                        !reviews.length &&
                        <div>Results not found</div>
                    }
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
};

export default Main;