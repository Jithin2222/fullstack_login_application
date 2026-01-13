import React from 'react'
import {registerUser} from "../services/userServices";
import {useNavigate} from "react-router-dom";
import './auth.css';

const Register = () => {

    const navigate = useNavigate();

    const submit=async(e)=>{
        e.preventDefault();
        await registerUser({
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        });
        alert("User Registered!");
        navigate("/login");
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