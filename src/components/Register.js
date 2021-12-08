import React, { useState } from 'react'
import '../css/Register.css'
import BannerImage from '../asserts/cake12.jpg';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <div className='register' style={{backgroundImage: `url(${BannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'98.92vw',
        height:'100vh' }}>
            
            <div className='register__container'>
                <h1>Sign-up</h1>

                <form>
                    <h5>Name</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign up</button>
                </form>

                <p>
                    By signing-up you agree to the Sweet Basket Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>


                <button className='register__loginButton'>Already have an Account?</button>


            </div>
        </div>
    )
}

export default Register
