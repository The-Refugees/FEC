import React, {useState, useEffect} from 'react';
import Question from './Question.jsx'
import {Accordion, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionForm from './QuestionForm.jsx';

function QuestionsList(props) {

  var first2Questions = [];
  var getFirst2Questions = function() {
    for (var i = 0; i < props.data.length; i++) {
      if (first2Questions.length !== 2) {
        first2Questions.push(props.data[i])
      }
    }
    return first2Questions
  }
  getFirst2Questions()


  return (
    <div id="questionList">
        {!props.loading &&
          <Container>
            {props.data.map((item, i) => (

              <Question key={i} id={item.question_id} questions={item.question_body} answers={item.answers} data={props.data} loading={props.loading}  setAnswerBody={props.setAnswerBody} addPhotos={props.addPhotos} setNickname={props.setNickname} setEmail={props.setEmail} body={props.body} nickname={props.nickname} email={props.email} setAnswers={props.setAnswers} first2Questions={first2Questions} helpfulness={item.question_helpfulness} item={item} setQuestions={props.setQuestions} helpful={props.helpful} setHepfulness={props.setHepfulness}/>
            ))}
          </Container>
        }
    </div>
  )
}

export default QuestionsList;