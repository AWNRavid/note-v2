// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// import NavbarComp from './comps/Navbar';
import Login from './comps/Login';
// import Register from './comps/Register';
import Home from './comps/Home';
// import GetNote from './comps/GetNote';
// import Register2 from './comps/Register2';
import About from './comps/About'
// import Note from './comps/Note';
import NoteList from './comps/NoteList';

// import axios from './api/api';
import { /* useEffect, */ useState } from 'react';
import Register3 from './comps/Register3';

function App() {
  // const navigate = useNavigate();
  // const [notes, setNotes] = useState([]);
  // const [users, setUsers] = useState([]);
  // const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLogin, setIsLogin] = useState(false)

  // const handleGetNote = async () => {
  //   const response = await axios.get('/get-note');
  //   console.log(...response.data);
  //   console.log(response.data);
  //   setNotes(response.data);
  // };

  const handleUsername = (username) => {
    return setUsername(username);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login handleUsername={handleUsername}/>} />
        {/* <Route path="/register" element={<Register username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleRegister={handleRegister} />} /> */}
        <Route path='/register' element={<Register3 />} />
        {/* <Route path="/get-note" element={<GetNote handleGetNote={handleGetNote} notes={notes} />} /> */}
        <Route path="/about" element={<About />} />
        <Route path='/note' element={<NoteList username={username}/>} />
      </Routes>
    </div>
  );
}

export default App;

