import React from 'react'

function GetNote({handleGetNote, notes}) {
  return (
    <div>
        <button onClick={handleGetNote}>get all note</button>
        {console.log(notes)}
        {notes && notes.map((note) => {
            return (
                <div key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            )
        })}
    </div>
  )
}

export default GetNote