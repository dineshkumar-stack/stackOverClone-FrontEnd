import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function AskQuestion({ handleNewQuestionTitle, newQuestionTitleRef, newQuestionTitle, newNoteContent, handleNoteChange, newNoteImportant, handleSelectChange, addNote, newNoteContentRef }) {

    return (
        <Container>
            <h1 className="mt-4">Ask a Question</h1>
            <Form onSubmit={addNote}>
                <Form.Group controlId="questionTitle">
                    <Form.Label>Question Title</Form.Label>
                    <Form.Control
                        type="text"
                        id='inputNewTitle'
                        placeholder="Enter your question title"
                        onChange={handleNewQuestionTitle}
                        value={newQuestionTitle}
                        ref={newQuestionTitleRef}
                    />
                </Form.Group>
                <Form.Group controlId="questionDescription">
                    <Form.Label>Question Description</Form.Label>
                    <Form.Control
                        as="textarea"

                        id='inputNewNoteDescription'
                        placeholder="Enter your question title"
                        onChange={handleNoteChange}
                        value={newNoteContent}
                        ref={newNoteContentRef}
                    />

                   <br/> <label className='form-label' htmlFor='selectImportance'>Select the Tag: </label>
                    <select
                        id='selectImportance'
                        onChange={handleSelectChange}
                        value={newNoteImportant}
                    >
                        <option>--Tag--</option>
                        <option>Node</option>
                        <option>JavaScript</option>
                        <option>React</option>
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>Angular</option>
                        <option>MongoBD</option>
                        <option>AWS</option>
                        <option>Java</option>
                        <option>Python</option>
                        <option>Other</option>
                    </select>
                </Form.Group> <br/> 
                <Button className='AskQbts' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AskQuestion;
