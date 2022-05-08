import React from 'react';
import './style.css';

function RegisterForm () {
    return (
        <form className='form-base'>
            <div className='form-inner'>
                <div className='form-group'>
                    <label htmlFor='Name'>Name:</label>
                    <input type='text' name='name' id='name'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='text' name='password' id='password'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' name='email' id='email'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='wallet'>Wallet:</label>
                    <input type='text' name='wallet' id='wallet'/>
                </div>
                <input type='submit' value='REGISTER'/>
            </div>
        </form>
    );
}

export default RegisterForm;