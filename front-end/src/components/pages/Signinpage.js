import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Formpages.css';
import { Link } from 'react-router-dom';
import {signin} from '../../actions/userActions';


function SigninPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    
    useEffect(() => {
        if (userInfo) {
            props.history.push('/');
        }
        return () => {
        //
        };
        }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return (
    <div className="form">
        <form onSubmit={submitHandler} >
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input className="validate" type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </li>
                <li>
                    <button type="submit" className="form-btn">Signin</button>
                </li>
                <li>
                    New to Fineprint?
                </li>
                <li>
                    <Link to='/register' className="button secondary text-center" >Create your Fineprint account here</Link>
                </li>
            </ul>
        </form>
    </div>
    )
}

export default SigninPage