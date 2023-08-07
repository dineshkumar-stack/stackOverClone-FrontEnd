import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ReadNotes from './components/ReadNotes';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import AskQuestion from './components/AskQuestion';
import RecentQ from './components/RecentQ';
// import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';



function App() {

  const [notes, setNotes] = useState([]);
  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
  const [showStatus, setShowStatus] = useState('all');

  const fetchAllNotes = async () => {
    await axios
      .get('https://stackoverclone-be.onrender.com/api/notes/')
      .then(response => setNotes(response.data));
  }

  useEffect(() => {
    fetchAllNotes();
  }, []);

  const newQuestionTitleRef = useRef(null);

  const handleNewQuestionTitle = (event) => {
    setNewQuestionTitle(event.target.value);
  }

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
      title: newQuestionTitle,
      content: newNoteContent,
      important: newNoteImportant,
    };

    // make an api call and push the data to the database
    axios
      .post('https://stackoverclone-be.onrender.com/api/notes/', noteObject)
      .then(response => console.log('note created'));

    setNewQuestionTitle('')
    setNewNoteContent('');
    setNewNoteImportant('');
    newNoteContentRef.current.focus();
    newQuestionTitleRef.current.focus();
  }

  //////////////container home
  // const filterNotes = (notes, showStatus) => {
  //   switch (showStatus) {
  //     case 'all':
  //       return notes;
  //     case 'imp':
  //       return notes.filter(note => note.important === true);
  //     case 'nonimp':
  //       return notes.filter(note => note.important === false);
  //     default:
  //       return notes;
  //   }
  // }
  // const notesFiltered = filterNotes(notes, showStatus);
  ////////////////////

  return (
    <Router>
      <div className="stack-overflow-clone">
        <header>
          <h1>Stack Overflow Clone</h1>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/recentQ">Recent</Link></li>
              <li><Link to="/AskQuestion">Ask-Question</Link></li>
              <li><Link to="/readNotes" >Tags</Link></li>
              <li>Users</li>
              {/* <li><Link to="/readNotes" >Read Notes</Link></li> */}
              <li><Link to="/createNote" >Create Note</Link></li>
              <li><Link to="/editNote" >Edit Note</Link></li>
            </ul>
          </nav>
        </header>
        {/* <Link to="/Home">Home</Link>
        <Link to="/readNotes" >Read Notes</Link>
        <Link to="/createNote" >Create Note</Link>
        <Link to="/editNote" >Edit Note</Link> */}
      </div>

      <Routes>

        <Route path='/' element={<Home notes={notes} showStatus={showStatus} setShowStatus={setShowStatus} />} />
        <Route path='/recentQ' element={<RecentQ notes={notes} showStatus={showStatus} setShowStatus={setShowStatus} />} />
        <Route path='/home' element={<Home notes={notes} showStatus={showStatus} setShowStatus={setShowStatus} />} />
        <Route path='/readNotes' element={<ReadNotes notes={notes} showStatus={showStatus} setShowStatus={setShowStatus} />} />
        <Route path='/createNote' element={<CreateNote newNoteContent={newNoteContent} handleNoteChange={handleNoteChange} newNoteImportant={newNoteImportant} handleSelectChange={handleSelectChange} addNote={addNote} newNoteContentRef={newNoteContentRef} />} />
        <Route path='/editNote' element={<EditNote notes={notes} />} />
        <Route path='/questions:id' element={<AskQuestion newNoteContent={newNoteContent} newQuestionTitle={newQuestionTitle} handleNoteChange={handleNoteChange} handleNewQuestionTitle={handleNewQuestionTitle} newNoteImportant={newNoteImportant} handleSelectChange={handleSelectChange} addNote={addNote} newNoteContentRef={newNoteContentRef} newQuestionTitleRef={newQuestionTitleRef} />} />
        <Route path='/AskQuestion' element={<AskQuestion newNoteContent={newNoteContent} newQuestionTitle={newQuestionTitle} handleNoteChange={handleNoteChange} handleNewQuestionTitle={handleNewQuestionTitle} newNoteImportant={newNoteImportant} handleSelectChange={handleSelectChange} addNote={addNote} newNoteContentRef={newNoteContentRef} newQuestionTitleRef={newQuestionTitleRef} />} />
      </Routes>
    </Router>
  );
}

export default App;
