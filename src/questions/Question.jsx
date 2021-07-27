import React, {useState} from 'react';
import AnswersList from './AnswersList.jsx';
import AnswerForm from './AnswerForm.jsx';

function Question() {
  return (
    <div id="question">
      <AnswersList/>
      <AnswerForm/>
    </div>
  )
}

export default Question;