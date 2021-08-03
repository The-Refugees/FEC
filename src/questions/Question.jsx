import React, {useState, useEffect} from 'react';
import AnswersList from './AnswersList.jsx';
import AnswerForm from './AnswerForm.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, Card} from 'react-bootstrap';
import {dateParser} from '../../shared/helpers.js'
import Button from 'react-bootstrap/ModalFooter';
import QuestionForm from './QuestionForm.jsx';

function Question(props) {
  var first2 = [];
  var getFirst2Answers = function() {
  Object.keys(props.a).map((key, i) => {
    if (first2.length !== 2) {
      first2.push(props.a[key])
    }
    for (var i = 0; i < first2.length; i++) {
      for (var keys in props.a) {
        if (props.a[key] === first2[i]) {
          delete props.a[key]
        }
      }
    }
    return first2
  })
}
getFirst2Answers()


  return (
    <Container id="question" >
    <Card style={{padding: '10px', backgroundColor: "rgb(214,234,248)"}}>{ 'Q: ' + props.q}</Card>
      {first2.map((answer, i) => (
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
                <Container>
                 <Card>

                   <Card.Body>

                     {Object.keys(props.a).map((key, i) => (
                       <Card key={i}>
                         <Row style={{padding: '12px', backgroundColor: "rgb(242,244,244)"}}>{'A: ' + props.a[key].body}</Row>
                         <Row >{'by ' + props.a[key].answerer_name + ' ' + dateParser(props.a[key].date)}</Row>
                       </Card>
                      ))}
                   </Card.Body>
                 </Card>
                </Container>
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


