import React, {useState, useEffect} from 'react';
import AnswerForm from './AnswerForm.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, Card} from 'react-bootstrap';
import {dateParser} from '../../shared/helpers.js'
import Button from 'react-bootstrap/ModalFooter';
import QuestionForm from './QuestionForm.jsx';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';

function Question(props) {

  var first2Answers = [];
  var getFirst2Answers = function() {
    if (Object.keys(props.answers).length === 0) {
      return []
    }
  Object.keys(props.answers).map((key, i) => {
    if (first2Answers.length !== 2) {
      first2Answers.push(props.answers[key])
    }
  })
  return first2Answers
  }
  getFirst2Answers()

  var updateQuestionHelpfulness = function() {
    const headers = {
      'Authorization': AUTH_TOKEN
    }
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${props.id}/helpful`, null, {headers})
    .then((response) => {
      console.log('update!')
      props.item.question_helpfulness += 1
      props.setQuestions(props.data)
      console.log(props.item.question_helpfulness)

    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <Container id="question" >

    <Card style={{padding: '10px', backgroundColor: "rgb(214,234,248)"}}>
      <Row>
      { 'Q: ' + props.questions + ' Helpful? ' + '(' + props.helpfulness + ')'}
      <Button onClick={updateQuestionHelpfulness}>yes</Button>
      </Row>
      <AnswerForm  setAnswerBody={props.setAnswerBody} addPhotos={props.addPhotos} setNickname={props.setNickname} setEmail={props.setEmail} body={props.body} nickname={props.nickname} email={props.email} id={props.id} answers={props.answers} setAnswers={props.setAnswers}/>
    </Card>

    {first2Answers.map((answer, i) => (
      <Container key={i}>
        <Row style={{padding: '12px', backgroundColor: "rgb(242,244,244)"}} >{'A: ' + answer.body}</Row>
        <Row >{'by ' + answer.answerer_name + ' ' + dateParser(answer.date) + ' Helpful? ' + '(' + answer.helpfulness + ')'}</Row>
      </Container>
      ))}

      {!props.loading &&

            <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Body>
                {!props.loading &&

                 <Card>
                     {Object.keys(props.answers).slice(2).map((key, i) => (
                       <Card key={i}>
                         <Row style={{padding: '12px', backgroundColor: "rgb(242,244,244)"}}>{'A: ' + props.answers[key].body}</Row>
                         <Row >{'by ' + props.answers[key].answerer_name + ' ' + dateParser(props.answers[key].date) + ' Helpful? ' + '(' + props.answers[key].helpfulness + ')'}
                         </Row>
                       </Card>
                      ))}
                 </Card>

                }
              </Accordion.Body>
              <Accordion.Header>Load More Answers</Accordion.Header>
            </Accordion.Item>
          </Accordion>
      }
    </Container>
  )
}

export default Question;