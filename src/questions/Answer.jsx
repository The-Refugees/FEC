import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Answer(props) {
  console.log(props.data)
  return (
    <div id="answer">
          {/* {!props.loading &&
      <Container>
        <Row>
          <Col>{props.data[0].answers['1719418'].body}
          </Col>
        </Row>
        <Row>
        <Col>{props.data[0].answers['1719580'].body}
        </Col>
        </Row>

      </Container>
      } */}
    </div>
  )
}

export default Answer;