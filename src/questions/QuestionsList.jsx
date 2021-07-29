import React, {useState, useEffect} from 'react';
import Question from './Question.jsx'
import {Accordion, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function QuestionsList(props) {

  // const [test, after2] = useState([]);
  // useEffect(() => {
  //   for (var i = 2; i < props.data.length; i++) {
  //     after2(props.data[i])
  //   }
  // }, [after2]);

  return (
    <div id="questionList">
      <h2>I am a list of questions</h2>
      <Question data={props.data} loading={props.loading}/>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>See More Questions</Accordion.Header>
          <Accordion.Body>
            {!props.loading &&
            <Container>

                {props.data.map((item) => (
                  <Row>{item.question_body}</Row>
                ))}

            </Container>
            }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default QuestionsList;