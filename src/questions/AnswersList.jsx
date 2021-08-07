import React, {useState} from 'react';
import Answer from './Answer.jsx';
import {Accordion, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Question from './Question.jsx';


function AnswersList(props) {

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

              

            </Container>
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default AnswersList;