import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  
  const [name, setName]=useState("");
  const [password, setPassword]=useState("");
  const [email, setEmail]=useState("");
  const [wallet, setWallet]=useState("");

  async function login() {
    console.log("This is a login test !");
  }

  async function register() {
    const url = "http://localhost:3000/register";
    const data = {
      name: "name",
      email: "email",
      password: "password",
      wallet: "wallet"
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    }).catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="App">
      <h1 className='HomeHeader'>Welcome on YourVote !</h1>
        <div className='body-page'>
          <div className="App-corp">
            <Router>
              <NavBar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register register={register} setName={setName} setPassword={setPassword} setEmail={setEmail} setWallet={setWallet}/>}/>
                <Route path="/login" element={<Login login={login} setEmail={setEmail} setPassword={setPassword}/>}/>
                <Route path="/menu" element={<Menu/>}/>
              </Routes>
            </Router>
          </div>
        </div>
    </div>
  );
}

export default App;
