import { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useDispatchTyped from '../../../hooks/useDispatchTyped';

import Title from '../../../components/title/Title';
import { setUserData } from '../../../store/userInfo/UserInfoSlice';
import { API_BASE_URL, API_LOGIN_ENDPOINT } from '../../../helpers/Main';

import '../../../style/reset.scss'; 
import '../../../style/common.scss'; 
import './SignIn.scss';

function SignIn () {
    const navigator = useNavigate();
    const dispatch = useDispatchTyped();
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const emailFieldFocus = useRef();

    useEffect(() => {
        emailFieldFocus.current && emailFieldFocus.current.focus();
    }, []);

    function handleChange (event) {
        event.preventDefault();
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value, 
        }));
    }

    async function SignInAction (event) {
        event.preventDefault();
        try {
            const accessData = {
                email: state.email,
                password: state.password,
            };
            const response = await fetch(`${API_BASE_URL}${API_LOGIN_ENDPOINT}`, {
                method: 'POST',
                body: JSON.stringify(accessData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const userDataBd = await response.json();
            if (!userDataBd) 
                return navigator('/notfound');
            const userDataFormed = {
                email: userDataBd.user.email,
                accessToken: userDataBd.accessToken,
                refreshToken: userDataBd.refreshToken,
                isActivated: userDataBd.user.isActivated,
            };
            dispatch(setUserData(userDataFormed));
            return navigator('/success'); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="signin-wrap medium-container">
            <Title content="Sign in" fontSize="42" lineHeight="46" fontWeight="600" />
            <form action="/" className="user-data-wrap" >
                <input type="text" name="email" className="user-data-wrap__email" placeholder="Email" onChange={handleChange} ref={emailFieldFocus}/>
                <input type="password" name="password" className="user-data-wrap__password" placeholder="Password" onChange={handleChange}/>
                <button className="user-data-wrap__signin-action" onClick={SignInAction}>Authorization</button>
            </form>
            <div className="signup-container">
                <p className="signup-container__title">Have no account?</p>
                <Link to={'/signup'} className="signup-container__link">Sign up</Link>
            </div>
        </section>
    );
}

export default SignIn;