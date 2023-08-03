import React from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';



function Home({ notes, showStatus, setShowStatus }) {
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


    <div className="stack-overflow-clone">
      <header>
        <h1>Stack Overflow Clone</h1>
        <nav>
          <ul>
            <li>Questions</li>
            <li>Tags</li>
            <li>Users</li>
            <li>Ask Question</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Recent Questions</h2>
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
                  {note.tag}
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
      <Container>
        <h1 className="sm-6">Stack Overflow Clone</h1>
        <Row>
          {notesFiltered.map(note => (
            <Col key={note.id} sm={6} md={6} lg={6} className="sm-6">
              <Card>
                <Card.Body>
                  <Badge>{note.timeStamp}</Badge>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.content}</Card.Text>
                  <Button variant="primary" href={`/questions/${note.id}`}>
                    View Question {note.comments}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>


  );
}

export default Home;
