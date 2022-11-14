import React, { useState } from 'react';
import NavbarComp from './Navbar';
import style from './Register3.module.css';
import api from '../api/api';
import { Link } from 'react-router-dom';

function Register3() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/register', { email, username: name, password }).then((result) => {
        console.log(result);
        /* if (result.data === 'email already exist') {
          setErrMsg('Email already exist');
          return;
        } else if (result.data === 'user already exist') {
          setErrMsg('Username already taken');
          return;
        } */
        setName('');
        setPassword('');
        setEmail('');
        console.log(name, password, email);
        // console.log('click');
        setSuccess(true);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavbarComp />
      {success ? (
        <div className={style.success}>
          <h1>Register Sucess</h1>
          <Link to="/login">Click here to login</Link>
        </div>
      ) : (
        <div className={style.register}>
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <label>
              <span>Name: </span>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              <span>Email: </span>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <span>Password: </span>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button className="btnn">Sign up</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Register3;
