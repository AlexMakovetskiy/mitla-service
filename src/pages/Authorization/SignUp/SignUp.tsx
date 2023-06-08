import { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ISignUpState } from '../../../interfaces/pages/authorization';
import { DisableMouseEventType } from '../../../interfaces/pages/Main';
import Title from '../../../components/title/Title';
import { API_BASE_URL, API_REGISTRATION_ENDPOINT } from '../../../helpers/Main';

import '../../../style/reset.scss'; 
import '../../../style/common.scss'; 
import './SignUp.scss';

const SignUp: FC = () => {
    const navigator = useNavigate();
    const [state, setState] = useState<ISignUpState>({
        email: '',
        password: '',
        confirmPassword: '',
    });

    function handleChange (event: ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value, 
        }));
    }

    async function signUpAction (event: DisableMouseEventType) {
        event.preventDefault();
        try {
            if (state.password !== state.confirmPassword) {
                return navigator('/notfound');
            }
            const userData = {
                email: state.email,
                password: state.password,
            };
            const response = await fetch(`${API_BASE_URL}${API_REGISTRATION_ENDPOINT}`, {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const userDataBd = await response.json();
            if (!userDataBd) 
                return navigator('/notfound');
            return navigator('/authorization'); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="signup-wrap medium-container">
            <Title content="Sign Up" fontSize="42" lineHeight="46" fontWeight="600" />
            <div className="user-data-wrap" >
                <input type="text" name="email" className="user-data-wrap__email" placeholder="Email" onChange={handleChange}/>
                <input type="password" name="password" className="user-data-wrap__password" placeholder="Password" onChange={handleChange}/>
                <input type="password" name="confirmPassword" className="user-data-wrap__confirm-password" placeholder="Confirm password" onChange={handleChange}/>
                <button className="user-data-wrap__signin-action" onClick={signUpAction}>Create an account</button>
            </div>
        </section>
    );
};

export default SignUp;