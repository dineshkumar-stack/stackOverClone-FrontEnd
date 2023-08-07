import React from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';



function RecentQ({ note, notes, showStatus, setShowStatus }) {
  const filterNotes = (notes, showStatus) => {
    switch (showStatus) {
      case 'all':
        return notes;
      case 'allNode':
        return notes.filter(note => note.important === "Node");
      case 'allReact':
        return notes.filter(note => note.important === "React");
      default:
        return notes;
    }
  }


  const notesFiltered = filterNotes(notes, showStatus);


  return (


    <div className="stack-overflow-clone">
      <Container>
        <h1 className="sm-6">Recent Questions</h1>
        <Row>
          {notesFiltered.map(note => (

            <Col key={note.id} sm={6} md={6} lg={6} className="sm-6">
              <Card>
                <Card.Body>
                  <Badge>{note.timeStamp}</Badge>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.content}</Card.Text>
                  <Badge>{note.important}</Badge>
                  <div>
                    <Badge variant="primary" key={note.id} className="mr-1">
                      {note.tag}
                    </Badge>
                  </div>
                  <Button variant="primary" href={`/questions/${note.id}`}>
                    View Question {note.comments}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <footer>
        <p>&copy; 2023 Stack Overflow Clone. All rights reserved.</p>
      </footer>

    </div>


  );
}

export default RecentQ;
