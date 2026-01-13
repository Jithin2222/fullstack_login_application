import React from 'react'
import {loginUser} from '../services/userServices';
import {useNavigate} from 'react-router-dom';
import './auth.css';

const Login = () => {

    const navigate = useNavigate();

    const login=async(e)=>{
        e.preventDefault();

        try {
            const res = await loginUser({
                email: e.target.email.value,
                password: e.target.password.value,
            })
            alert(res.data.message);

            localStorage.setItem("user", JSON.stringify(res.data));

            navigate("/dashboard");
        } catch (error) {
            alert("Invalid credential!")
        }
        
    }

    return (
        <div className='auth-page'>
            <form className='auth-card' onSubmit={login}>
                <h2>Welcome Back!</h2>
                <input type="email" name="email" id="email" placeholder='Email' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login