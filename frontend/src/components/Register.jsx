import React from 'react'
import {registerUser} from "../services/userServices";
import './auth.css';

const Register = () => {

    const submit=async(e)=>{
        e.prevenetDefault();
        await registerUser({
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        });
        alert("User Registered!")
    }

    return (
        <div className='auth-page'>
            <form className='auth-card' onSubmit={submit}>
                <h2>Create Account</h2>
                <input type="text" name="username" id="username" placeholder='Username' />
                <input type="email" name="email" id="email" placeholder='Email' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register