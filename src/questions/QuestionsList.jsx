import React, {useState, useEffect} from 'react';
import Question from './Question.jsx'
import {Accordion, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionForm from './QuestionForm.jsx';

function QuestionsList(props) {

  // const [test, after2] = useState([]);
  // useEffect(() => {
  //   for (var i = 2; i < props.data.length; i++) {
  //     after2(props.data[i])
  //   }
  // }, [after2]);

  return (
    <div id="questionList">
        {!props.loading &&
          <Container>
            {props.data.map((item, i) => (

              <Question key={i} questions={item.question_body} answers={item.answers} data={props.data} loading={props.loading} postNewAnswers={props.postNewAnswers} setAnswerBody={props.setAnswerBody} addPhotos={props.addPhotos} setNickname={props.setNickname} setEmail={props.setEmail}/>

            ))}
          </Container>
        }
    </div>
  )
}

export default QuestionsList;