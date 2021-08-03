import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/ModalFooter';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';
import QuestionsList from './QuestionsList.jsx';
import Question from './Question.jsx';


function QuestionForm(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var handleSubmit = function() {
    props.update();
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a Question +
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submit a Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Whats your Question?</Form.Label>
            <Form.Control type="text" placeholder="Your question here..." onChange={e => props.setQuestion(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>PLease enter your nickname</Form.Label>
            <Form.Control type="text" placeholder="Nickname" onChange={e => props.setNickname(e.target.value)}/>

          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" onChange={e => props.setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit} >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default QuestionForm;