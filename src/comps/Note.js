import React, { useState } from 'react';
import './Note.css';
import { MdDeleteForever } from 'react-icons/md';
import { BsFillPencilFill } from 'react-icons/bs';
import { Modal, Button, Form } from 'react-bootstrap';

function Note({ id, content, date, handleDeleteNote, handleUpdateNote }) {
  const [show, setShow] = useState(false);
  const [noteContent, setNoteContent] = useState(content);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (e) => {
    e.preventDefault();
    const todayDate = new Date().toISOString().slice(0, 10);

    const newNote = {
      id: id,
      content: noteContent,
      date: todayDate
    };

    handleUpdateNote(newNote);
    handleClose();
  };

  return (
    <div className="note">
      {/* <p>{title}</p> */}
      <span>{content}</span>
      <div className="note-footer">
        {/* <small>{date}</small> */}
        <small>{date.slice(0, 10)}</small>
        <BsFillPencilFill className="edit-icon" size="1.1rem" onClick={handleShow} />
        <MdDeleteForever className="delete-icon" size="1.3rem" onClick={() => handleDeleteNote(id)} />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading lklklklk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Note;
