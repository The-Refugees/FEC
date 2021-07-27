import React, {useState} from 'react';
import Answer from './Answer.jsx';

function AnswersList() {
  return (
    <div id="answerList">
      <h3>I am a list of answers</h3>
      <Answer/>
    </div>
  )
}

export default AnswersList;