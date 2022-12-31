import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './Firebase';
import './Login.css';

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        //Prevents refreshing when given email and password
        e.preventDefault();

        //Firebase Login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //Firebase Registry
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //Successfully created a user
                if (auth) {
                    history.go('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login_logo'
                    src='https://thumbs.dreamstime.com/b/amazon-155631949.jpg' alt='' />
            </Link>

            <div className='login_container'>
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange=
                        {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange=
                        {e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}
                        className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Clone Conditions
                    of Use and Privacy Notice.
                </p>

                <h6>New to Amazon?</h6>
                <button onClick={register}
                    className='login_registerButton'>Create Your Amazon Account</button>

                <h7>© 1996-2022, Amazon.com, Inc. or its affiliates</h7>
            </div>
        </div>
    )
}

export default Login