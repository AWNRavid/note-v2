import React, { useState } from 'react';
import './Note.css';
import { MdDeleteForever } from 'react-icons/md';
import { BsFillPencilFill } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';

function Note({ id, content, date, handleDeleteNote, handleUpdateNote, color, colorsOption }) {
  const [show, setShow] = useState(false);
  const [noteContent, setNoteContent] = useState(content);
  const [tempColor, setTempColor] = useState('');

  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteContent(event.target.value);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (e) => {
    e.preventDefault();
    const todayDate = new Date().toISOString().slice(0, 10);

    const newNote = {
      id: id,
      content: noteContent,
      date: todayDate,
      color: tempColor
    };

    handleUpdateNote(newNote);
    handleClose();
  };

  console.log(color);

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <span>{content}</span>
      <div className="note-footer">
        {/* <small>{date.slice(0, 10)}</small> */}
        <BsFillPencilFill className="edit-icon" size="1.1rem" onClick={handleShow} />
        <MdDeleteForever className="delete-icon" size="1.3rem" onClick={() => handleDeleteNote(id)} />
      </div>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading lklklklk</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          {/* <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" value={noteContent} onChange={(e) => setNoteContent(e.target.value)} />
            </Form.Group>
          </Form> */}
          <textarea className="edit" onChange={handleChange} style={{ backgroundColor: tempColor }}>
            {content}
          </textarea>
          <div style={{ display: 'flex', width: '50%', justifyContent: 'space-evenly', marginTop: '10px', marginBottom: '10px' }}>
            {colorsOption.map((color) => (
              <div key={color} className="colors" style={{ backgroundColor: color }} onClick={() => setTempColor(color)}></div>
            ))}
          </div>
          <small>{characterLimit - noteContent.length} Remaining</small>
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
