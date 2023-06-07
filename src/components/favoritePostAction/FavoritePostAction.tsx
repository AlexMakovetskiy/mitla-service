import useSelectorTyped from '../../hooks/useSelectorTyped';
import useDispatchTyped from '../../hooks/useDispatchTyped';

import { IReview } from '../../interfaces/pages/Main';

import favoritePostsSelector from '../../store/favoritePosts/favoritePostsSelector';
import { setFavoritePost } from '../../store/favoritePosts/favoritePostsSlice';

import '../../style/reset.scss';
import '../../style/common.scss';
import './FavoritePostAction.scss';

function FavoritePostAction (props: { postData: IReview }) {
    const dispatch = useDispatchTyped();
    const favoritePosts = useSelectorTyped(favoritePostsSelector);

    const postData = props.postData;

    const isFavoritePost = favoritePosts.find((favoritePost) => { 
        
        return favoritePost.id === postData.id;
    });

    const handleFavoriteAction = () => {
        return dispatch(setFavoritePost(postData));
    };
    
    return (
        <div className="favorite-post-wrap">
            <button className={!isFavoritePost ? 'action-deactivated' : 'action-activated'} onClick={handleFavoriteAction}>
                <img src="/assets/vector/addFavorite/redHeartLogo.svg" alt="heart logo" className="heart-logo"/>
            </button>
        </div>
    );
}

export default FavoritePostAction;