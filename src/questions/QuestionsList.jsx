import React, {useState, useEffect} from 'react';
import Question from './Question.jsx'
import {Accordion, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionForm from './QuestionForm.jsx';

function QuestionsList(props) {

  return (
    <div id="questionList">
        {!props.loading &&
          <Container>
            {props.data.map((item, i) => (

              <Question key={i} id={item.question_id} questions={item.question_body} answers={item.answers} data={props.data} loading={props.loading}  setAnswerBody={props.setAnswerBody} addPhotos={props.addPhotos} setNickname={props.setNickname} setEmail={props.setEmail} body={props.body} nickname={props.nickname} email={props.email} setAnswers={props.setAnswers}/>

            ))}
          </Container>
        }
    </div>
  )
}

export default QuestionsList;