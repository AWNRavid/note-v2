import React, { useState } from 'react';
import style from './AddNote.module.css';

function AddNote({ handleAddNote, colors, setColors }) {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;
  const [tempColor, setTempColor] = useState('');

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, tempColor);
      // api.post('/')
      setNoteText('');
    }
  };

  return (
    <div className={style.newnote} style={{backgroundColor: tempColor}}>
      <textarea style={{backgroundColor: tempColor}} rows="8" cols="10" placeholder="Type to add a note..." value={noteText} onChange={handleChange}></textarea>
      <div style={{ display: 'flex', width: '50%', justifyContent: 'space-evenly' }}>
        {colors.map((color) => (
          <div key={color} className={style.colors} style={{ backgroundColor: color }} onClick={() => setTempColor(color)}></div>
        ))}
      </div>
      <div className={style['note-footer']}>
        <small>{characterLimit - noteText.length} Remaining</small>

        <button className={style.save} onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
