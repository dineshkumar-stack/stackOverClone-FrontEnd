import React, { useState } from 'react';
import axios from 'axios';

function EditNote({ notes }) {
    const [showForm, setShowForm] = useState(false);
    const [updateNoteContent, setUpdateNoteContent] = useState('');
    const [updateNoteImportant, setUpdateNoteImportant] = useState(false);
    const [ID, setID] = useState('');

    const textareaStyle = {
        width: '350px',
        height: '45px',
        fontSize: '12px',
        lineHeight: '1',
        padding: '8px'
    }

    const editNoteHandler = (id) => {
        setShowForm(true);
        setID(id);

        // fetch the details of the note
        axios
            .get(`https://stackoverclone-be.onrender.com/api/notes/${id}`)
            .then(note => {
                setUpdateNoteContent(note.data.content);
                setUpdateNoteImportant(note.data.important ? 'Yes': 'No');
            });
    }

    const updateNote = (event) => {
        event.preventDefault();

        const noteToPut = {
            content: updateNoteContent,
            important: updateNoteImportant
        };

        console.log(noteToPut, ID);

        axios.put(`https://stackoverclone-be.onrender.com/api/notes/${ID}`, noteToPut)
            .then((response) => console.log('note updated'))
        
        setShowForm(false);
    }

  return (
      <div>
          <h1>Edit Note</h1>

          <ul>
              {
                  notes.map(note => 
                      <li key={note.id}>
                          {note.content}
                          <button onClick={() => editNoteHandler(note.id)}>Edit</button>
                      </li>
                  )
              }
          </ul>

          {
              showForm && 
              <div>
                      <form onSubmit={updateNote}>
                        <label htmlFor='inputNewNoteContent'>Content: </label>
                        <textarea
                            id='inputNewNoteContent'
                            style={textareaStyle}
                            placeholder='type a new note...'
                            onChange={e => setUpdateNoteContent(e.target.value)}
                            value={updateNoteContent}
                        ></textarea>
                        <br /><br />
                        <label htmlFor='selectImportance'>Select the Importance: </label>
                        <select
                            id='selectImportance'
                            onChange={e => setUpdateNoteImportant(e.target.value)}
                            value={updateNoteImportant}
                        >
                            <option>--Select--</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <br /><br />
                        <button type='submit'>Update Note</button>
                    </form>
                </div>
          }
    </div>
  )
}

export default EditNote;