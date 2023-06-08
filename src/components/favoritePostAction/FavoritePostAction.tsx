import { FC } from 'react';

import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';

import { DisableMouseEventType, IReview } from '../../interfaces/pages/Main';
import { IFavoritePostActionProps } from '../../interfaces/components/Props';
import favoritePostsSelector from '../../store/favoritePosts/favoritePostsSelector';
import { setFavoritePost } from '../../store/favoritePosts/favoritePostsSlice';

import '../../style/reset.scss';
import '../../style/common.scss';
import './FavoritePostAction.scss';

const FavoritePostAction: FC<IFavoritePostActionProps> = (props) => {
    const dispatch = useAppDispatch();
    const favoritePosts = useAppSelector(favoritePostsSelector);

    const postData: IReview = props.postData;

    const isFavoritePost: IReview | undefined= favoritePosts.find((favoritePost) => { 
        return favoritePost.id === postData.id;
    });

    const handleFavoriteAction = (event: DisableMouseEventType) => {
        event.preventDefault();
        return dispatch(setFavoritePost(postData));
    };
    
    return (
        <div className="favorite-post-wrap">
            <button className={!isFavoritePost ? 'action-deactivated' : 'action-activated'} onClick={handleFavoriteAction} data-testid="favorite-post-button-test">
                <img src="/assets/vector/addFavorite/redHeartLogo.svg" alt="heart logo" className="heart-logo" data-testid="heart-logo-action-test"/>
            </button>
        </div>
    );
};

export default FavoritePostAction;