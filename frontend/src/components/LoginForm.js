import React from 'react';

import './style.css';

function LoginForm () {
    return (
        <form>
            <div className='form-inner'>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' name='email' id='email'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='text' name='password' id='password'/>
                </div>
                <input type='submit' value='LOGIN'/>
            </div>
        </form>
    );
}

export default LoginForm;