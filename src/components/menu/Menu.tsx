import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';

import { DisableMouseEventType } from '../../interfaces/pages/Main';
import Title from '../../ui/title/Title';
import { removeUserData } from '../../store/userInfo/UserInfoSlice';
import getUserDataSelector from '../../store/userInfo/UserInfoSelector';
import { API_BASE_URL, API_LOGOUT_ENDPOINT } from '../../utils/Main';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Menu.scss';

const Menu: FC = () => {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const userData = useAppSelector(getUserDataSelector);
    const isLogin = useAppSelector(getUserDataSelector).email;

    async function handleMenuAction (event: DisableMouseEventType) {
        event.preventDefault();
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
                <button className="menu-wrap__favorites-action" onClick={handleFavoritesLink} data-testid="favorites-action-test">Favorites</button>
                <div className="user-data-container">
                    <p className="user-data-container__subtitle">{!!isLogin ? userData.email : 'You are no login!'}</p>
                    <button className="menu-action" onClick={handleMenuAction}>
                        <p className="menu-action__title">{!!isLogin ? 'Logout' : 'SignIn'}</p>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Menu;