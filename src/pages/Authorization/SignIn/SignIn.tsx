import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../../components/Title/Title';

import '../../../style/reset.scss'; 
import '../../../style/common.scss'; 
import './SignIn.scss';

function SignIn () {

    const navigator = useNavigate();
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    function handleChange (event: { preventDefault: () => void; target: { name: string; value: string; }; }) {
        event.preventDefault();
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value, 
        }));
    }

    function SignInAction () {
        if (state.email !== 'admin' || state.password !== 'admin') 
            return navigator('/notfound');;
        return navigator('/success');
    }

    return (
        <section className="signin-wrap medium-container">
            <Title content="Sign in" fontSize="42" lineHeight="46" fontWeight="600" />
            <form action="/" className="user-data-wrap" >
                <input type="text" name="email" className="user-data-wrap__email" placeholder="Email" onChange={handleChange}/>
                <input type="password" name="password" className="user-data-wrap__password" placeholder="Password" onChange={handleChange}/>
                <button className="user-data-wrap__signin-action" onClick={SignInAction}>Authorization</button>
            </form>
        </section>
    );
}

export default SignIn;