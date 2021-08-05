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
  const [update, updateQuestions] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question_body, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');


  const [newAnswers, setAnswers] = useState({});
  const [body, setAnswerBody] = useState('');
  const [data, setDate] = useState('');
  const [helpful, setHepfulness] = useState('');
  const [photos, addPhotos] = useState([])
  // const [newid, createId] = useState('')

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

  var postNewQuestions = function(event) {
    const headers = {
      'Authorization': AUTH_TOKEN
    }
    const article = {
      body: 'user',
      name: nickname,
      email: email,
      product_id: 24156,
      question_body: question_body,
      answers: {},
      'question_id': newId
    }
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions', article, {headers})
    .then((response) => {

      setQuestions(questions.concat(article))
      console.log(questions)
    })
    .catch((error) => {
      console.log(error, article)
    })
  }

  var postNewAnswers = function() {
    const headers = {
      'Authorization': AUTH_TOKEN
    }
    const answerObj = {
      body: body,
      name: nickname,
      email: email,
      // product_id: 24156,
      photos: []
    }
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${183084}/answers`, answerObj, {headers})
    .then((response) => {
      console.log(questions)
      setAnswers(Object.assign(questions[1].answers, answerObj))
      console.log(questions[1].answers)
    })
    .catch((error) => {
      console.log(questions)
      console.log(error, answerObj)
    })
  }

    var newId = Math.round(Math.random() * (199999 - 100000) + 100000)
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].question_id === newId) {
        newId = Math.random() * (199999 - 100000) + 100000;
      }
    }


  return (
    <Container>
      <h3>Questions and Answers</h3>
      <QuestionsSearch/>
      {!loading &&
      <QuestionsList data={questions} loading={loading} setQuestions={setQuestions} postNewAnswers={postNewAnswers} setName={setName} setNickname={setNickname} setEmail={setEmail} setAnswerBody={setAnswerBody} addPhotos={addPhotos}/>
      }
      {!loading &&
      <QuestionForm data={questions} loading={loading} update={postNewQuestions} setName={setName} setNickname={setNickname} setQuestion={setQuestion} setEmail={setEmail}/>
       }
    </Container>
  )
}

export default QandA

