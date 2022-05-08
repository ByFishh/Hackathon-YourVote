import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Menu from './Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import RegisterForm from './components/RegisterForm';
import HomeHeader from './background_header_home.jpg';

function App() {
  return (
    <div className="App">
      <h1 className='HomeHeader'>Welcome on YourVote !</h1>
      <div className="App-header">
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/menu" element={<Menu/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
