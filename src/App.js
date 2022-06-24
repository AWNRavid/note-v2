// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavbarComp from './comps/Navbar';
import Login from './comps/Login';
import Register from './comps/Register';
import Home from './comps/Home';
import GetNote from './comps/GetNote';
import axios from './api/api';
import { useState } from 'react';

function App() {
  const navigate = useNavigate()
  const [notes, setNotes] = useState([]);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault()
    // console.log(email,username, password);
    const response = await axios.post('/register',{email,username,password})
    console.log(response);
  }

  const handleGetNote = async () => {
    const response = await axios.get('/get-note')
    console.log(...response.data);
    console.log(response.data);
    setNotes(response.data)
  }

  return (
    <div className="App">
      <NavbarComp />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleRegister={handleRegister}/>} />
        <Route path='/get-note' element={<GetNote handleGetNote={handleGetNote} notes={notes}/>}/>
      </Routes>
    </div>
  );
}

export default App;
