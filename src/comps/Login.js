import React, { useState, useEffect } from 'react';
import NavbarComp from './Navbar';
import api from '../api/api';
import { Link, useNavigate  } from 'react-router-dom';
// import './Login.css';
import style from './Login.module.css';
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

  const [username] = useState('');
  const [validUsername, setValidUsername] = useState(false);

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  useEffect(() => {
    const result = INPUT_REGEX.test(username);
    setValidUsername(result);
  }, [username]);
  
  useEffect(() => {
    const result = INPUT_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = INPUT_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    await api
      .post('/login/', { email, password })
      .then((result) => {
        console.log(result);
        console.log(result.status);
        console.log(result.statusText);
        console.log(result.data.result.username);
        console.log(validUsername);
        console.log(validPassword);
        console.log(validEmail);
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
    <div className={style.login}>
      <NavbarComp />
      {/* <Container>
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
              <Link to="/register">Register Here</Link>
            </span>
          </p>
        </section>
      </Container> */}
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>
          <span>Email: </span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Password: </span>
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className='btnn'>Login</button>

        <Link to="/register" className={style["register-link"]}>Click here to sign up</Link>
      </form>


      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} />
    </div>
  );
}

export default Login;
