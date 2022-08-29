import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import Note from './Note';
import './NoteList.css';
import { Container, Navbar, Nav, Row, Col, Card, Button, Alert, CloseButton } from 'react-bootstrap';
import AddNote from './AddNote';

function NoteList({ username }) {
  const [notes, setNotes] = useState([]);

  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const handleGetNote = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await api.get('/get-note/:userId', {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setNotes(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetNote();
  }, [notes]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleAddNote = async (text) => {
    try {
      const token = localStorage.getItem('token');
      // const date = new Date();
      const todayDate = new Date().toISOString().slice(0, 10);
      console.log(todayDate);

      const response = await api.post(
        '/add-note/:userId',
        { content: text, date: todayDate },
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
    const { id, content } = newNote;
    console.log(id, content);
    try {
      const token = localStorage.getItem('token');
      const response = await api.put(
        `/update-note/${id}`,
        { id, content },
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

  return (
    <>
      <Container style={{ height: '100vh' }}>
        {show && (
          <Alert variant="primary" className="mt-3" dismissible onClose={() => setShow(false)}>
            Welcome To Your Note {username}
          </Alert>
        )}

        {/* Welcome To Your Note {username} */}

        <button onClick={handleLogout} className="mt-3 btn btn-danger logout-btn">
          Logout
        </button>

        <div className="notes-list mt-3">
          <AddNote handleAddNote={handleAddNote} />
          {notes.map((note) => {
            return <Note key={note.id} id={note.id} title={note.title} content={note.content} date={note.date} handleDeleteNote={handleDeleteNote} handleUpdateNote={handleUpdateNote} />;
          })}
        </div>
      </Container>
    </>
  );
}

export default NoteList;
