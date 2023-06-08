import { useNavigate } from 'react-router-dom';

import useSelectorTyped from '../../hooks/useSelectorTyped';
import useDispatchTyped from '../../hooks/useDispatchTyped';

import Title from '../title/Title';
import { removeUserData } from '../../store/userInfo/UserInfoSlice';
import getUserDataSelector from '../../store/userInfo/UserInfoSelector';
import { API_BASE_URL, API_LOGOUT_ENDPOINT } from '../../helpers/Main';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Menu.scss';

interface IMenuProps {
    userEmail: string,
    isLogin: boolean,
}

function Menu ({userEmail = 'You are no login!'}: IMenuProps) {
    const navigator = useNavigate();
    const dispatch = useDispatchTyped();
    const userData = useSelectorTyped(getUserDataSelector);
    const isLogin = useSelectorTyped(getUserDataSelector).email;

    async function handleMenuAction () {
        if(!isLogin) {
            return navigator('/authorization');
        }
        try {
            const token = { refreshToken: userData.refreshToken };
            const response = await fetch(`${API_BASE_URL}${API_LOGOUT_ENDPOINT}`, {
                method: 'POST',
                body: JSON.stringify(token),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseJson = await response.json();
            if (!responseJson) 
                return navigator('/notfound');
            dispatch(removeUserData());
        } catch (error) {
            console.log(error);
        }
    }

    function handleFavoritesLink () {
        if (!isLogin)
            return navigator('/authorization');
        return navigator('/favorites');
    }
    
    return (
        <nav className="menu-background">
            <div className="menu-wrap">
                <Title content="Menu" fontSize="28" lineHeight="30" fontWeight="500" />
                <button className="menu-wrap__favorites-action" onClick={handleFavoritesLink}>Favorites</button>
                <div className="user-data-container">
                    <p className="user-data-container__subtitle">{!!isLogin ? userData.email : 'You are no login!'}</p>
                    <button className="menu-action" onClick={handleMenuAction}>
                        <p className="menu-action__title">{!!isLogin ? 'Logout' : 'SignIn'}</p>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Menu;