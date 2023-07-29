import React from 'react';

function CreateNote({newNoteContent, handleNoteChange, newNoteImportant, handleSelectChange, addNote, newNoteContentRef}) {

    const textareaStyle = {
        width: '350px',
        height: '45px',
        fontSize: '12px',
        lineHeight: '1',
        padding: '8px'
    }

  return (
      <div>
          <h1>Create a New Note</h1>

          <form onSubmit={addNote}>
              <label htmlFor='inputNewNoteContent'>Content: </label>
              <textarea
                  id='inputNewNoteContent'
                  style={textareaStyle}
                  placeholder='type a new note...'
                  onChange={handleNoteChange}
                  value={newNoteContent}
                  ref={newNoteContentRef}
              ></textarea>
              <br /><br />
              <label htmlFor='selectImportance'>Select the Importance: </label>
              <select
                  id='selectImportance'
                  onChange={handleSelectChange}
                  value={newNoteImportant}
              >
                  <option>--Select--</option>
                  <option>Yes</option>
                  <option>No</option>
              </select>
              <br /><br />
              <button type='submit'>Add New Note</button>
          </form>
    </div>
  )
}

export default CreateNote;