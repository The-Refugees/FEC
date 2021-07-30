import React, {useState, useEffect} from 'react';
import AnswersList from './AnswersList.jsx';
import AnswerForm from './AnswerForm.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, Card} from 'react-bootstrap';
import {dateParser} from '../../shared/helpers.js'
import Button from 'react-bootstrap/ModalFooter'

function Question(props) {

  var first2 = [];
  var inner = function() {
  Object.keys(props.a).map((key, i) => {
    if (first2.length !== 2) {
      first2.push(props.a[key])
    }
    return first2
  })
}
inner()

console.log(first2)

  return (
    <div id="question">
      { 'Q: ' + props.q}
      {first2.map((answer, i) => (
        <Container key={i}>
          <Row >{'A: ' + answer.body}</Row>
          <Row >{'by ' + answer.answerer_name + ' ' + dateParser(answer.date) + '   ' + 'Helpful?'}</  Row>
        </Container>
      ))}

      {!props.loading &&

            <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Load More Answers</Accordion.Header>
              <Accordion.Body>
                {!props.loading &&
                <Container>
                 <Card>

                   <Card.Body>

                     {Object.keys(props.a).map((key, i) => (
                       <Card key={i}>
                         <Row >{'A: ' + props.a[key].body}</Row>
                         <Row >{'by ' + props.a[key].answerer_name + ' ' + dateParser(props.a[key].date)}</Row>
                       </Card>
                      ))}
                   </Card.Body>
                 </Card>
                </Container>
                }
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      }
    </div>
  )
}

export default Question;


