import React, {useState, useEffect} from 'react';
import AnswerForm from './AnswerForm.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, Card} from 'react-bootstrap';
import {dateParser} from '../../shared/helpers.js'
import Button from 'react-bootstrap/ModalFooter';
import QuestionForm from './QuestionForm.jsx';


function Question(props) {
  var first2Answers = [];
  var getFirst2Answers = function() {
  Object.keys(props.answers).map((key, i) => {
    if (first2Answers.length !== 2) {
      first2Answers.push(props.answers[key])
    }
  })
  return first2Answers
}
getFirst2Answers()


  return (
    <Container id="question" >

    <Card style={{padding: '10px', backgroundColor: "rgb(214,234,248)"}}>
      { 'Q: ' + props.questions}
      <AnswerForm  setAnswerBody={props.setAnswerBody} addPhotos={props.addPhotos} setNickname={props.setNickname} setEmail={props.setEmail} body={props.body} nickname={props.nickname} email={props.email} id={props.id} answers={props.answers} setAnswers={props.setAnswers}/>
    </Card>

      {first2Answers.map((answer, i) => (
        <Container key={i}>
          <Row style={{padding: '12px', backgroundColor: "rgb(242,244,244)"}} >{'A: ' + answer.body}</Row>
          <Row >{'by ' + answer.answerer_name + ' ' + dateParser(answer.date) + '   ' + 'Helpful?'}</  Row>
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
                         <Row >{'by ' + props.answers[key].answerer_name + ' ' + dateParser(props.answers[key].date)}</Row>
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


