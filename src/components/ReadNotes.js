import React from 'react';
import '../App.css';
import { Container, Row, Col, Card, Badge, Form } from 'react-bootstrap';

function ReadNotes({ notes, showStatus, setShowStatus }) {

  const filterNotes = (notes, showStatus) => {
    switch (showStatus) {
      case 'all':
        return notes;
      case 'Node':
        return notes.filter(note => note.important === "Node");
      case 'JavaScript':
        return notes.filter(note => note.important === "JavaScript");
      case 'React':
        return notes.filter(note => note.important === "React");
      case 'HTML':
        return notes.filter(note => note.important === "HTML");
      case 'CSS':
        return notes.filter(note => note.important === "CSS");
      case 'Angular':
        return notes.filter(note => note.important === "Angular");
      case 'MongoBD':
        return notes.filter(note => note.important === "MongoBD");
      case 'AWS':
        return notes.filter(note => note.important === "AWS");
      case 'Java':
        return notes.filter(note => note.important === "Java");
      case 'Python':
        return notes.filter(note => note.important === "Python");
      case 'Other':
        return notes.filter(note => note.important === "Other");
      default:
        return notes;
    }
  }

  const notesFiltered = filterNotes(notes, showStatus);
  return (

    <Container>
      <h1 className="mt-4">Read Tag Page</h1>
      <Form>
        <Form.Group>
          <Form.Label>All Tags</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="all"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>Node</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="Node"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>React</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="React"
            onChange={e => setShowStatus(e.target.value)}
          />


          <Form.Label>JavaScript</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="JavaScript"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>HTML</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="HTML"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>CSS</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="CSS"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>Angular</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="Angular"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>MongoBD</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="MongoBD"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>AWS</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="AWS"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>Java</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="Java"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>Python</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="Python"
            onChange={e => setShowStatus(e.target.value)}
          />

          <Form.Label>Other</Form.Label>
          <Form.Check
            inline
            type='radio'
            name='filter'
            value="Other"
            onChange={e => setShowStatus(e.target.value)}
          />


        </Form.Group>
      </Form>
      <Row>
        {notesFiltered.map(note => (
          <Col key={note.id} sm={6} md={4} lg={3} className="mt-3">
            <Card>
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.content}</Card.Text>
                <Card.Text>{note.description}</Card.Text>
                <div>
                  <Badge variant="primary" className="mr-1">
                    {note.important}
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )

}

export default ReadNotes;