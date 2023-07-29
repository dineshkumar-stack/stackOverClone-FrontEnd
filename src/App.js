import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ReadNotes from './components/ReadNotes';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

function App() {

  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('--Select--');
  const [showStatus, setShowStatus] = useState('all');

  const fetchAllNotes = async () => {
    await axios
      .get('https://stackoverclone-be.onrender.com/api/notes/')
      .then(response => setNotes(response.data));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);

  const newNoteContentRef = useRef(null);

  const handleNoteChange = (event) => {
    setNewNoteContent(event.target.value);
  }

  const handleSelectChange = (event) => {
    setNewNoteImportant(event.target.value);
  }

  const addNote = (event) => {
    event.preventDefault();

    // prepare a new object
    let noteObject = {
      content: newNoteContent,
      important: newNoteImportant === 'Yes',
    };

    // make an api call and push the data to the database
    axios
      .post('https://stackoverclone-be.onrender.com/api/notes/', noteObject)
      .then(response => console.log('note created'));
    
    setNewNoteContent('');
    setNewNoteImportant('--Select--');
    newNoteContentRef.current.focus();
  }

  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/readNotes" style={{ paddingLeft: 15 }}>Read Notes</Link>
        <Link to="/createNote" style={{ paddingLeft: 15 }}>Create Note</Link>
        <Link to="/editNote" style={{paddingLeft: 15}}>Edit Note</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/readNotes' element={<ReadNotes notes={notes} showStatus={showStatus} setShowStatus={setShowStatus} />} />
        <Route path='/createNote' element={<CreateNote newNoteContent={newNoteContent} handleNoteChange={handleNoteChange} newNoteImportant={newNoteImportant} handleSelectChange={handleSelectChange} addNote={addNote} newNoteContentRef={newNoteContentRef} />} />
        <Route path='/editNote' element={<EditNote notes={notes} />} />
      </Routes>
    </Router>
  );
}

export default App;
