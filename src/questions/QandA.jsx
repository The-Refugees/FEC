import React, {useState, useEffect} from 'react';
import QuestionsSearch from './QuestionsSearch.jsx';
import QuestionsList from './QuestionsList.jsx';
import QuestionForm from './QuestionForm.jsx';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';


function QandA(props) {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const AuthStr = AUTH_TOKEN;
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/?product_id=24156', { headers: { Authorization: AuthStr } })
      .then(response => {
        setQuestions(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  }, [setQuestions]);





  return (
    <div>
      <h3>Questions and Answers</h3>
      <QuestionsSearch/>
      <QuestionsList data={questions.results} loading={loading}/>
      <QuestionForm/>
    </div>
  )
}


export default QandA

