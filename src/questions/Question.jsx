import React, {useState} from 'react';
import AnswersList from './AnswersList.jsx';
import AnswerForm from './AnswerForm.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Question(props) {
  // console.log(props.data)
  // look at the option of importing the currQuestionAnswers here and using it
  // instead of hardcoding the first 2 qnswers
  return (
    <div id="question">
      {!props.loading &&
      <Container>
        <Row>
          <Col>{'Q: ' + props.data[0].question_body} <button>add answer</button>
            <Col>{'A: ' + props.data[0].answers['1719418'].body}</Col>
            <Col>{ 'A: ' + props.data[0].answers['1719580'].body}</Col>
            <AnswersList data={props.data} loading={props.loading}/>
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
        </Row>

      </Container>
      }
    </div>
  )
}

export default Question;