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
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AskQuestion;
