import React from 'react';
import LoginForm from './components/LoginForm';

function Login(props) {
    return (
        <div className='dropdown-home-menu'>
            <LoginForm login={props.login} setEmail={props.setEmail} setPassword={props.setPassword}/>
        </div>
    );
}

export default Login;
