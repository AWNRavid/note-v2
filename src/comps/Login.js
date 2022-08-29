import React, { useState, useEffect } from 'react';
import NavbarComp from './Navbar';
import { Container, Navbar, Nav, Row, Col, Button, Form } from 'react-bootstrap';
import api from '../api/api';
import { Link, useNavigate  } from 'react-router-dom';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INPUT_REGEX = /^(?!\s*$).+/;

const toastSetting = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

function Login({handleUsername}) {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    const result = INPUT_REGEX.test(username);
    setValidUsername(result);
  }, [username]);

  useEffect(() => {
    const result = INPUT_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    await api
      .post('/login/', { username, password })
      .then((result) => {
        console.log(result);
        console.log(result.status);
        console.log(result.statusText);
        console.log(result.data.result.username);
        handleUsername(result.data.result.username)
        // toast.success('Login success', toastSetting);
        localStorage.setItem('token', result.data.accessToken);
        navigate('/note');
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error.response.status);
        toast.error(error.response.data, toastSetting);
      });
    // const result = await api.post('/login', {username, password});
    // console.log(result);
  };

  // const notify = () => toast("Wow so easy!");

  return (
    <div>
      <NavbarComp />
      <Container>
        <section id="regis-form">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!validUsername || !validPassword ? true : false}>
              Login
            </Button>
          </Form>

          <p>
            Havent registered?
            <br />
            <span className="line">
              {/*put router link here*/}
              <Link to="/register">Register Here</Link>
            </span>
          </p>
        </section>
      </Container>

      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} />
    </div>
  );
}

export default Login;
