import React, { useState } from 'react'
import '../css/Login.css'
import BannerImage from '../asserts/odin1.webp';
import { Link, useHistory} from 'react-router-dom';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/services');
    }

    return (
        <div className='login' style={{backgroundImage: `url(${BannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'98.92vw',
        height:'100vh' }}>
            
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={handleSubmit}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Sweet Basket Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to='/user/register'>
                <button className='login__registerButton'>Create your Account</button>
                </Link>

            </div>
        </div>
    )
}

export default Login
