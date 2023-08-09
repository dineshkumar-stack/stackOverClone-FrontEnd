import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import QuestionModal from './QuestionModal'; // Import the QuestionModal component
// import { Link } from 'react-router-dom';




function RecentQ({ note, notes, showStatus, setShowStatus, props }) {
  const filterNotes = (notes, showStatus) => {
    switch (showStatus) {

      default:
        return notes;
    }
  }


  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleViewQuestion = (question) => {
    setSelectedQuestion(question);
    setModalShow(true);
  };

  const [showFullDescription, setShowFullDescription] = useState({});

  const handleToggleDescription = (questionId) => {
    setShowFullDescription(prevState => ({
      ...prevState,
      [questionId]: !prevState[questionId]
    }));
  };



  const notesFiltered = filterNotes(notes, showStatus);
  return (


    <div className="stack-overflow-clone">
      <Container>
        <h1 className="mt-4">Recent Questions</h1>
        <Row>
          {notesFiltered.map((note) => (
            <Col key={note.id} sm={6} md={4} lg={3} className="mt-3">
              <div className="card">
                <div className="card-body">
                  <Badge>{note.important}</Badge>
                  <Badge>{note.timeStamp}</Badge>
                  <h5 className="card-title">{showFullDescription[note.id]
                    ? note.title
                    : `${note.title.slice(0, 50)}...`}</h5>
                  {note.content && (
                    <p className="card-text">
                      {showFullDescription[note.id]
                        ? note.content
                        : `${note.content.slice(0, 100)}...`}
                    </p>
                  )}
                  {note.content && note.content.length > 100 && (
                   <label><Button
                      variant="link"
                      onClick={() => handleToggleDescription(note.id)}
                    >
                      {showFullDescription[note.id] ? 'View Less' : 'View More'}
                    </Button></label> 
                  )}

                  {/* <Link to={`/questions/${note.id}`} className="btn btn-primary mr-2">View Details</Link> */}
                  <Button variant="primary" onClick={() => handleViewQuestion(note)}>View Question</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <QuestionModal show={modalShow} onHide={() => setModalShow(false)} question={selectedQuestion} />
      </Container>


      <footer>
        <p>&copy; 2023 Stack Overflow Clone. All rights reserved.</p>
      </footer>

    </div>

  );
}

export default RecentQ;
