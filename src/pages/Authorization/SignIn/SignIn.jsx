import { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Title from '../../../components/title/Title';

import '../../../style/reset.scss'; 
import '../../../style/common.scss'; 
import './SignIn.scss';

function SignIn () {
    const navigator = useNavigate();
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

    function SignInAction (event) {
        event.preventDefault();
        const storageUsers = JSON.parse(localStorage.getItem('mitla-users') || '[]');
        if (!storageUsers.length)
            return navigator('/notfaund');
        for (const storageUser of storageUsers) {
            if (storageUser.email === state.email && storageUser.password === state.password) {
                const userData = {
                    userEmail: state.email,
                    isLogin: true,
                };
                localStorage.setItem('mitla-login', JSON.stringify(userData));
                return navigator('/success'); 
            }
        }
        return navigator('/notfound');;
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