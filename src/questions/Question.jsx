import React, {useState, useEffect} from 'react';
import AnswersList from './AnswersList.jsx';
import AnswerForm from './AnswerForm.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, Card} from 'react-bootstrap';
import {dateParser} from '../reviews/helpers.js'

function Question(props) {

  return (
    <div id="question">
      { 'Q: ' + props.q}
      {!props.loading &&

            <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>See More Answers</Accordion.Header>
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


