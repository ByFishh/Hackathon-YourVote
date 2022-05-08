import React from 'react';
import './style.css';

function RegisterForm () {
    return (
        <form className='form-base register-block'>
            <div className='form-inner'>
                <div className='form-group'>
                    <label className='element' htmlFor='Name'>Name:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='name' id='name'/>
                </div>
                <div className='form-group'>
                    <label className='element' htmlFor='password'>Password:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='password' id='password'/>
                </div>
                <div className='form-group'>
                    <label className='element' htmlFor='email'>Email:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='email' id='email'/>
                </div>
                <div className='form-group'>
                    <label className='element' htmlFor='wallet'>Wallet:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='wallet' id='wallet'/>
                </div>
                <input className='button-home' type='submit' value='REGISTER'/>
            </div>
        </form>
    );
}

export default RegisterForm;