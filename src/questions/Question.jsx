import React, {useState, useEffect} from 'react';
import AnswersList from './AnswersList.jsx';
import AnswerForm from './AnswerForm.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, Card} from 'react-bootstrap';

function Question(props) {
  // console.log(props.data)
  // look at the option of importing the currQuestionAnswers here and using it
  // instead of hardcoding the first 2 qnswers
  console.log(props.a)

  return (
    <div id="question">
      {!props.loading &&
      <Card>
        <Card.Body>
          { 'Q: ' + props.q}
          {Object.keys(props.a).map((key) => (
            <Row>{'A: ' + key.body}</Row>
          ))}
        </Card.Body>

        {/* <Row>
          <Col>{'Q: ' + props.data[0].question_body} <button>add answer</button>
            <Col>{'A: ' + props.data[0].answers['1719418'].body}</Col>
            <Col>{ 'A: ' + props.data[0].answers['1719580'].body}</Col>
            <AnswersList data={props.data} loading={props.loading} />
            <AnswerForm/>
          </Col>
        </Row>
        <Row>
        <Col>{props.data[1].question_body} <button>add answer</button>
          <Col>{'A: ' + props.data[1].answers['1719689'].body}</Col>
          <Col>{ 'A: ' + props.data[1].answers['1719702'].body}</Col>
          <AnswersList data={props.data} loading={props.loading}/>
          <AnswerForm/>
        </Col>
        </Row> */}

      </Card>
      }
    </div>
  )
}

export default Question;