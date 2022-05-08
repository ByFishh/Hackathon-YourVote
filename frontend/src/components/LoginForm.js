import React, { useState } from 'react';
import './style.css';

function LoginForm(props) {
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");

    return (
        <form className='form-base login-block'>
            <div className='form-inner'>
                <div className='form-group'>
                    <label className='element' htmlFor='email'>Email:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label className='element' htmlFor='password'>Password:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {props.setEmail(email)}
                {props.setPassword(password)}
                <input onClick={props.login} className='button-home' type='submit' value='LOGIN'/>
            </div>
        </form>
    );
}

export default LoginForm;