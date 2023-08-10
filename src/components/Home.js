import React from 'react';
import '../App.css';
import { Badge } from 'react-bootstrap';




function Home({ notes, showStatus, setShowStatus }) {
  const filterNotes = (notes, showStatus) => {
    switch (showStatus) {
      case 'all':
        return notes;
      case 'Node':
        return notes.filter(note => note.important === "Node");
      case 'React':
        return notes.filter(note => note.important === "React");
      
      default:
        return notes;
    }
  }
  const notesFiltered = filterNotes(notes, showStatus);

  return (


    <div className="stack-overflow-clone">
      <main>
        <section>
          <h2>Question</h2>
          {notesFiltered.map((note) => (
            <div className="question" key={note.id}>
              <small>{note.timeStamp}</small>
              <h3>{note.title}</h3>
              <p>{note.content}</p><br />
              <p>Comments</p>
              <td>
                <tr>
                  <li>{note.comments}</li>
                </tr>
              </td>
              <div>
                <Badge variant="primary" key={note.id} className="mr-1">
                  {note.important}
                </Badge>
              </div>
              <div className="question-details">
                <button>View</button>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Stack Overflow Clone. All rights reserved.</p>
      </footer>
    </div>


  );
}

export default Home;
