import React from 'react';
import StarRating from '../../shared/StarRating.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';


const charGroup = (attributes) => {

  let {title, text} = attributes;
  let name = title.toLowerCase();

  return (
  <Form.Group style={{padding: "0 0 0 16px"}} controlId={'form' + title}>
            <Form.Label><b>{title}</b></Form.Label>
            <Row>
              <Col sm={2} style={{margin: "auto", textAlign: "center"}}>
                <Form.Check type="radio" name={name} id={name + "-1"} style={{margin: "0"}}/>
              </Col>
              <Col sm={2} style={{textAlign: "center"}}>
                <Form.Check inline type="radio" name={name} id={name + "-2"} style={{margin: "0"}} />
              </Col>
              <Col sm={2} style={{textAlign: "center"}}>
                <Form.Check inline type="radio" name={name} id={name + "-3"} style={{margin: "0"}} />
              </Col>
              <Col sm={2} style={{textAlign: "center"}}>
                <Form.Check inline type="radio" name={name} id={name + "-4"} style={{margin: "0"}} />
              </Col>
              <Col sm={2} style={{margin: "auto", textAlign: "center"}}>
                <Form.Check inline type="radio" name={name} id={name + "-5"} style={{margin: "0"}} />
              </Col>
            </Row>
            <Row>
              <Col sm={3} style={{textAlign: "center"}}>
                <p>{text[0]}</p>
              </Col>
              <Col sm={6}>
              </Col>
              <Col sm={3} style={{textAlign: "center"}}>
                <p>{text[4]}</p>
              </Col>
            </Row>
          </Form.Group>
  );
}





const NewReview = (props) => {

  const {newReviewClicked, setNewReviewClicked, productName} = props;

  return (
    <Modal
      centered
      size="lg"
      id="new-review"
      show={newReviewClicked}
      onHide={() => setNewReviewClicked(false)}
    >

      <Modal.Header closeButton>
        <Modal.Title>Write Your Review</Modal.Title>
      </Modal.Header>
        <h6 style={{padding: "16px"}}>About the <i>*product name*</i></h6>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formRating">
            <Form.Label><h5>Overall Rating</h5></Form.Label>
            <Row style={{padding: "0 0 12px 22px"}}>
              <StarRating />
            </Row>
          </Form.Group>
          <Form.Label><h5>Characteristics</h5></Form.Label>
          {charGroup({
            title: 'Size',
            text: ['A size too small', '1/2 size too small', 'Perfect',
              '1/2 size too large' ,'A size too large']
          })}
          {charGroup({
            title: 'Width',
            text: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']
          })}
          {charGroup({
            title: 'Comfort',
            text: ['Uncomfortable', 'Slightly uncomfortable', 'Okay', 'Comfortable', 'Perfect']
            })}
          {charGroup({
            title: 'Quality',
            text: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Excellent']
          })}
          {charGroup({
            title: 'Length',
            text: ['Too short', 'Slightly short', 'Perfect', 'Slightly long', 'Too long']
          })}
          {charGroup({
            title: 'Fit',
            text: ['Too tight', 'Slightly tight', 'Perfect', 'Slightly loose', 'Too loose']
          })}

          <Form.Group controlId="formSummary">
            <Form.Label>Review Summary:</Form.Label>
              <Form.Control type="text" placeholder="Example: Best purchase ever!"/>
          </Form.Group>

          <Form.Group controlId="formBody">
            <Form.Label>Review Body:</Form.Label>
              <Form.Control type="textarea" placeholder="Why did you like the product or not?"/>
          </Form.Group>

          <Form.Group controlId="formPictures">
            <Form.Label>Upload your photos</Form.Label>
              <Form.Control type="file" multiple/>
          </Form.Group>

          <Form.Group controlId="formNickname">
            <Form.Label>What is your nickname?</Form.Label>
              <Form.Control type="text" placeholder="Example: jackson11!"/>
              <p>For privacy reasons, do not use your full name or email address</p>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Your email:</Form.Label>
              <Form.Control type="email" />
          </Form.Group>

          Form

        </Form>
      </Modal.Body>

    </Modal>
  )
}

export default NewReview;