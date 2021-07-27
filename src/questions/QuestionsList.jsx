import React, {useState} from 'react';
import Question from './Question.jsx'

function QuestionsList() {
  return (
    <div id="questionList">
      <h2>I am a list of questions</h2>
      <Question/>
    </div>
  )
}

export default QuestionsList;