import { FC } from 'react';

import useAppSelector from '../../hooks/useAppSelector';

import { IReview } from '../../interfaces/pages/Main';
import Review from '../../components/review/Review';
import Title from '../../ui/title/Title';
import favoritePostsSelector from '../../store/favoritePosts/favoritePostsSelector';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Favorites.scss';

const Favorites: FC = () => {
    const favoritePosts = useAppSelector(favoritePostsSelector);

    return (
        <main className="favorites-wrap">
            <Title content="Your favorite posts" fontSize="36" lineHeight="40" fontWeight="600"></Title>
            <section className="favorites-wrap__posts-wrap small-container">
                {
                    favoritePosts.map((favoritePost: IReview) => {
                        return (
                            <>
                                <Review data={favoritePost}/>
                                <hr />
                            </>
                        );
                    })
                }
                {
                    !favoritePosts.length &&
                    <section className="empty-favorites-wrapper">
                        <h2 className="empty-favorites-wrapper__title">There are no posts in favorites!</h2>
                    </section>
                }
            </section>
        </main>
    );
};

export default Favorites;