import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/ModalFooter';

function AnswerForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var handleClick = function() {
    props.postNewAnswers();
    handleClose()
  }

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add a Answer +
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Submit a Answer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>what would you like to say?</Form.Label>
          <Form.Control type="text" placeholder="Your answer here..." onChange={e => props.setAnswerBody(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>PLease enter your name</Form.Label>
          <Form.Control type="text" placeholder="name" onChange={e => props.setNickname(e.target.value)}/>

        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" onChange={e => props.setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>would you like to add photos?</Form.Label>
          <Form.Control type="text" placeholder="attatch photos" onChange={e => props.setEmail(e.target.value)}/>
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AnswerForm