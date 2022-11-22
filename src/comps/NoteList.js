import React from 'react';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import Note from './Note';
import './NoteList.css';
import { Container, Alert } from 'react-bootstrap';
import AddNote from './AddNote';

function NoteList({ username }) {
  const [notes, setNotes] = useState([]);

  const [show, setShow] = useState(true);

  const [colors, setColors] = useState(['#9ADCFF', '#FFF89A', '#FFB2A6', '#FF8AAE']);

  const navigate = useNavigate();

  const [member, setMember] = useState();

  const handleGetNote = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/get-note/:userId', {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      // console.log(response);
      setNotes(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const GetMember = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/get-member/:userId', {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      console.log(response);
      setMember(response.data[0].username)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetNote();
    GetMember()
  }, [notes]);

  /* useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
      navigate('/note')
    }
  }, []) */

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleAddNote = async (text, color) => {
    try {
      const token = localStorage.getItem('token');
      // const date = new Date();
      const todayDate = new Date().toISOString().slice(0, 10).replace('T', ' ');
      console.log(todayDate);
      console.log(text, color);

      await api.post(
        '/add-note/:userId',
        { content: text, date: todayDate, color },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteNote = async (id) => {
    console.log(id);
    const token = localStorage.getItem('token');
    await api.delete(`/delete-note/${id}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
  };

  const handleUpdateNote = async (newNote) => {
    console.log(newNote);
    const { id, content, color } = newNote;
    console.log(id, content);
    try {
      const token = localStorage.getItem('token');
      const response = await api.put(
        `/update-note/${id}`,
        { id, content, color },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(`Error: ${error}`);
      localStorage.removeItem('token');
    }
  };

  console.log(notes);

  return (
    <>
      <Container style={{ height: '100vh' }}>
        {show && (
          <Alert variant="primary" className="mt-3" dismissible onClose={() => setShow(false)}>
            Welcome To Your Note {member}
          </Alert>
        )}

        {/* Welcome To Your Note {username} */}

        <button onClick={handleLogout} className="mt-3 btn btn-danger logout-btn">
          Logout
        </button>

        <div className="notes-list mt-3">
          <AddNote handleAddNote={handleAddNote} colors={colors} setColors={setColors} />
          {notes.map((note) => {
            return <Note key={note.id} id={note.id} title={note.title} content={note.content} date={note.date} handleDeleteNote={handleDeleteNote} handleUpdateNote={handleUpdateNote} color={note.color} colorsOption={colors} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default NoteList;
