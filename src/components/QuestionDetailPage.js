import React from 'react';
import { useParams } from 'react-router-dom';

function QuestionDetailPage({ note }) {
  const { id } = useParams();
  const question = note.find(q => q.id === id);

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.description}</p>
      {/* Display other question details */}
    </div>
  );
}

export default QuestionDetailPage;
