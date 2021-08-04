import React, {useState, useEffect} from 'react';
import QuestionsSearch from './QuestionsSearch.jsx';
import QuestionsList from './QuestionsList.jsx';
import QuestionForm from './QuestionForm.jsx';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';
import Container from 'react-bootstrap/Container';


function QandA(props) {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, updateQuestions] = useState([])

  useEffect(() => {
    setLoading(true);
    const AuthStr = AUTH_TOKEN;
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/?product_id=24156', { headers: { Authorization: AuthStr } })
      .then(response => {
        setQuestions(response.data.results)
        setLoading(false)
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  }, []);


  const article = {
    body: 'chris',
    name: 'chris',
    email: 'chrisdwoodby@gmail.com',
    product_id: 24156,
    question_body: 'why no work :(',
    answers: {}
  }
  var getNew = function(event) {
    const headers = {
      'Authorization': AUTH_TOKEN
    }
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions', article, {headers})
    .then((response, request) => {

      setQuestions(questions.concat(article))
      console.log(questions)
    })
    .catch((error) => {
      console.log(error)
    })
  }



  return (
    <Container>
      <h3>Questions and Answers</h3>

      <QuestionsSearch/>
      {!loading &&

      <QuestionsList data={questions} loading={loading} setQuestions={setQuestions}/>
      }
      {!loading &&
      <QuestionForm data={questions} loading={loading} update={getNew} form={article}/>

       }
    </Container>
  )
}


export default QandA

