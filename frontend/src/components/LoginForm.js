import React from 'react';

import './style.css';

function LoginForm () {
    return (
        <form className='form-base login-block'>
            <div className='form-inner'>
                <div className='form-group'>
                    <label className='element' htmlFor='email'>Email:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='email' id='email'/>
                </div>
                <div className='form-group'>
                    <label className='element' htmlFor='password'>Password:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='password' id='password'/>
                </div>
                <input className='button-home' type='submit' value='LOGIN'/>
            </div>
        </form>
    );
}

export default LoginForm;