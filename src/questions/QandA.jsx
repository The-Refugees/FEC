import React, {useState, useEffect} from 'react';
import QuestionsSearch from './QuestionsSearch.jsx';
import QuestionsList from './QuestionsList.jsx';

function QandA() {

  const count = useState()

  useEffect(() => {
    console.log('ran')
  });

  return (
    <div>
      <h1>questions yo</h1>
      <QuestionsSearch/>
      <QuestionsList/>
    </div>
  )
}


export default QandA