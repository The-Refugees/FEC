import React, {useState, useEffect} from 'react';
import QuestionsSearch from './QuestionsSearch.jsx';
import QuestionsList from './QuestionsList.jsx';
import axios from 'axios';

function QandA() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const AuthStr = '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';
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/?product_id=24156', { headers: { Authorization: AuthStr } })
      .then(response => {
        setQuestions(response.data)
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  }, [setQuestions]);

  return (
    <div>
      <h1>Questions and Answers</h1>
      <QuestionsSearch/>
      <QuestionsList/>
    </div>
  )
}


export default QandA

