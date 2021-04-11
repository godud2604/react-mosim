import React, { useEffect, useState } from 'react';
import styles from './Signup.module.css';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../_actions/user_actions';
import Home from '../home/Home';
import { useHistory } from 'react-router';

const Signup = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if( response.payload.loginSuccess) {
                    history.push('/')
                } else {
                    alert('Error')
                }
            })
    }

    return (
        <div className={styles.signup}>
           <form className={styles.form} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <br/>
                <button type="submit">
                    Login
                </button>
           </form>
        </div>
    );
};

export default Signup;

