import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';

import { DisableMouseEventType } from '../../../interfaces/pages/Main';
import { IDataState } from '../../../interfaces/pages/authorization';
import Title from '../../../ui/title/Title';
import Loading from '../../../ui/loading/Loading';
import { getUserInfo } from '../../../store/userInfo/UserInfoThunk';
import getUserDataSelector from '../../../store/userInfo/UserInfoSelector';

import '../../../style/reset.scss'; 
import '../../../style/common.scss'; 
import './SignIn.scss';

const SignIn: FC = () => {
    const navigator = useNavigate();
    const dispatch = useAppDispatch();
    const [state, setState] = useState<IDataState>({
        email: '',
        password: '',
    });
    const emailFieldFocus = useRef<HTMLInputElement>(null);
    const loading = useAppSelector(getUserDataSelector).loading;
    const errorSignIn = useAppSelector(getUserDataSelector).error;
    const successSignIn = useAppSelector(getUserDataSelector).email;

    useEffect(() => {
        if (typeof emailFieldFocus.current !== 'undefined')
            emailFieldFocus.current && emailFieldFocus.current.focus();
        if (!!errorSignIn)
            return navigator('/notfound');
        if (!!successSignIn)
            return navigator('/');
    }, [errorSignIn, navigator, successSignIn]);

    function handleChange (event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value, 
        }));
    }

    function SignInAction (event: DisableMouseEventType) {
        event.preventDefault();
        const accessData: IDataState = {
            email: state.email,
            password: state.password,
        };
        dispatch(getUserInfo(accessData));
    }

    if(!!loading)
        return (
            <Loading/>
        );

    return (
        <section className="signin-wrap medium-container">
            <Title content="Sign in" fontSize="42" lineHeight="46" fontWeight="600" />
            <form action="/" className="user-data-wrap" >
                <input type="text" name="email" className="user-data-wrap__email" placeholder="Email" onChange={handleChange} ref={emailFieldFocus} data-testid="signin-email"/>
                <input type="password" name="password" className="user-data-wrap__password" placeholder="Password" onChange={handleChange}/>
                <button className="user-data-wrap__signin-action" onClick={SignInAction}>Authorization</button>
            </form>
            <div className="signup-container">
                <p className="signup-container__title">Have no account?</p>
                <Link to={'/signup'} className="signup-container__link">Sign up</Link>
            </div>
        </section>
    );
};

export default SignIn;