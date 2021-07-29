import React, {useState} from 'react';
import Answer from './Answer.jsx';
import {Accordion, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Question from './Question.jsx';


function AnswersList(props) {

  var currQuestionAnswers = [];
  var getAnswers = function() {
    if (!props.loading) {
      for (var key in props.data[0].answers) {
        currQuestionAnswers.push(props.data[0].answers[key])
      }
    }
  }
  getAnswers()


  return (
    <div id="answerList">
      {console.log(currQuestionAnswers)}
      <Answer data={props.data} loading={props.loading}/>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>See More Answers</Accordion.Header>
          <Accordion.Body>
            {!props.loading &&
            <Container>

                {currQuestionAnswers.map((item, i) => (
                  <Row key={i}>
                    <Row>{item.body}</Row>
                    <Row>{'by: ' + item.answerer_name + ', ' + item.date}</Row>
                  </Row>
                ))}

            </Container>
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default AnswersList;