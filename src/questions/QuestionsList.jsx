import React, {useState, useEffect} from 'react';
import Question from './Question.jsx'
import {Accordion, Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuestionForm from './QuestionForm.jsx';

function QuestionsList(props) {

  // const [test, after2] = useState([]);
  // useEffect(() => {
  //   for (var i = 2; i < props.data.length; i++) {
  //     after2(props.data[i])
  //   }
  // }, [after2]);


  useEffect(() => {
    // console.log('8/2/21', props.data)
  }, [props.data])

  return (
    <div id="questionList">
        {!props.loading &&
          <Container>
            {props.data.map((item, i) => (

              <Question key={i} q={item.question_body} a={item.answers} data={props.data} loading={props.loading}/>

            ))}
            </Container>
            }
    </div>
  )
}

export default QuestionsList;