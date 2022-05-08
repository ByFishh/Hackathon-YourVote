import React, { useState } from 'react';
import './style.css';

function RegisterForm(props) {
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    const [wallet, setWallet]=useState("");

    return (
        <form className='form-base register-block'>
            <div className='form-inner'>
                <div className='form-group'>
                    <label className='element' htmlFor='Name'>Name:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label className='element' htmlFor='password'>Password:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label className='element' htmlFor='email'>Email:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label className='element' htmlFor='wallet'>Wallet:</label>
                    <div className='element'></div>
                    <input className='element' type='text' name='wallet' id='wallet' value={wallet} onChange={(e)=>setWallet(e.target.value)}/>
                </div>
                {props.setName(name)}
                {props.setEmail(email)}
                {props.setPassword(password)}
                {props.setWallet(wallet)}
                <input className='button-home' type='submit' value='REGISTER' onClick={props.register}/>
            </div>
        </form>
    );
}

export default RegisterForm;