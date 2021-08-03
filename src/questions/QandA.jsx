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


  var getNew = function(event) {
    const headers = {
      'Authorization': AUTH_TOKEN
    }
    const article = {
      body: 'user',
      name: nickname,
      email: email,
      product_id: 24156,
      question_body: question_body,
      answers: {}
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



  return (
    <Container>
      <h3>Questions and Answers</h3>

      <QuestionsSearch/>
      {!loading &&

      <QuestionsList data={questions} loading={loading} setQuestions={setQuestions}/>
      }
      {!loading &&
      <QuestionForm data={questions} loading={loading} update={getNew} setName={setName} setNickname={setNickname} setQuestion={setQuestion} setEmail={setEmail}/>

       }
    </Container>
  )
}


export default QandA

