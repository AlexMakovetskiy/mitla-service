import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Title from '../../../components/title/Title';

import '../../../style/reset.scss'; 
import '../../../style/common.scss'; 
import './SignUp.scss';

function SignUp () {
    const navigator = useNavigate();
    const [state, setState] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    function handleChange (event: { preventDefault: () => void; target: { name: string; value: string; }; }) {
        event.preventDefault();
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value, 
        }));
    }

    function signUpAction (event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (state.password !== state.confirmPassword) {
            return navigator('/notfound');;
        }
        const storageUsers = JSON.parse(localStorage.getItem('mitla-users') || '[]');
        if (storageUsers.length !== 0) {
            storageUsers.push(state);
            localStorage.setItem('mitla-users', JSON.stringify(storageUsers));
            return navigator('/success'); 
        }
        const users= [];
        users.push(state); 
        localStorage.setItem('mitla-users', JSON.stringify(users));
        return navigator('/authorization'); 
    }

    return (
        <section className="signup-wrap medium-container">
            <Title content="Sign Up" fontSize="42" lineHeight="46" fontWeight="600" />
            <form action="/" className="user-data-wrap" >
                <input type="text" name="email" className="user-data-wrap__email" placeholder="Email" onChange={handleChange}/>
                <input type="password" name="password" className="user-data-wrap__password" placeholder="Password" onChange={handleChange}/>
                <input type="password" name="confirmPassword" className="user-data-wrap__confirm-password" placeholder="Confirm password" onChange={handleChange}/>
                <button className="user-data-wrap__signin-action" onClick={signUpAction}>Create an account</button>
            </form>
        </section>
    );
}

export default SignUp;