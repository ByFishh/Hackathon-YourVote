import React from 'react';
import RegisterForm from './components/RegisterForm';

function Register(props) {
    return (
        <div className='dropdown-home-menu'>
            <RegisterForm register={props.register} setName={props.setName} setPassword={props.setPassword} setEmail={props.setEmail} setWallet={props.setWallet}/>
        </div>
    );
}

export default Register;
