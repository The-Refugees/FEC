import React, {useState} from 'react';
import AnswersList from './AnswersList.jsx';
import AnswerForm from './AnswerForm.jsx';

function Question() {
  return (
    <div id="question">
      <p>I am a single question</p>
      <AnswersList/>
      <AnswerForm/>
    </div>
  )
}

export default Question;