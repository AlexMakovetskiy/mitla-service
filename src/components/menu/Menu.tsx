import { useNavigate } from 'react-router-dom';

import Title from '../title/Title';

import '../../style/reset.scss';
import '../../style/common.scss';
import './Menu.scss';

interface IMenuProps {
    userEmail: string,
    isLogin: boolean,
}

function Menu ({userEmail = 'You are no login!', isLogin = false}: IMenuProps) {
    const navigator = useNavigate();
    function handleMenuAction () {
        if(!!isLogin) {
            localStorage.removeItem('mitla-login');
            return isLogin = false;
        }
        return navigator('/authorization');

    }
    
    return (
        <nav className="menu-background">
            <div className="menu-wrap">
                <Title content="Menu" fontSize="28" lineHeight="30" fontWeight="500" />
                <div className="user-data-container">
                    <p className="user-data-container__subtitle">{userEmail}</p>
                    <button className="menu-action" onClick={handleMenuAction}>
                        <p className="menu-action__title">{isLogin ? 'Logout' : 'SignIn'}</p>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Menu;