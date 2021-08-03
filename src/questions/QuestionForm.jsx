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

  // console.log(props.form)

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
            <Form.Control type="text" placeholder="Your question here..." value={props.form.question_body} onChange={props.update}/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>PLease enter your nickname</Form.Label>
            <Form.Control type="text" placeholder="Nickname" value={props.form.name} onChange={props.update}/>

          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={props.form.email}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleClose} onSubmit={props.update}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default QuestionForm;