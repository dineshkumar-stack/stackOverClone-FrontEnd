import React from 'react';
import Note from './Note';

function ReadNotes({ notes, showStatus, setShowStatus }) {

  const filterNotes = (notes, showStatus) => {
    switch (showStatus) {
      case 'all':
        return notes;
      case 'imp':
        return notes.filter(note => note.important === true);
      case 'nonimp':
        return notes.filter(note => note.important === false);
      default:
        return notes;
    }
  }

  const notesFiltered = filterNotes(notes, showStatus);
  return (
    
    <div>
        <h1>Questions</h1> 
        
      <label>
        <input
          type='radio' 
          name='filter'
          value="all"
          onChange={e => setShowStatus(e.target.value)}
          />
        All Questions
      </label>
      
      <label>
        <input
          type='radio' 
          name='filter'
          value="imp"
          onChange={e => setShowStatus(e.target.value)}
          />
      Important question
      </label>
      
      <label>
        <input
          type='radio' 
          name='filter'
          value="nonimp"
          onChange={e => setShowStatus(e.target.value)}
          />
        Show Non-Important Notes
      </label>
      
        <ul>
            {
                notesFiltered.map(note => 
                    <Note key={note.id} note={note}/>
                    
                )     
            }      
        </ul>
    </div>
  )
  
}

export default ReadNotes;