import React, {useState} from 'react';
import StarRating from '../../shared/StarRating.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';


const NewReview = (props) => {

  const {newReviewClicked, setNewReviewClicked, productName} = props;

  const [rating, setRating] = useState(null);
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);
  const [length, setLength] = useState(null);
  const [fit, setFit] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const charGroup = (attributes) => {

    let {title, text} = attributes;
    let name = title.toLowerCase();

    const sets = {
      size: setSize,
      width: setWidth,
      comfort: setComfort,
      quality: setQuality,
      length: setLength,
      fit: setFit
    }
    const updateState = (charName, e) => {
      sets[charName](e.target.value);
    }

    return (
    <Form.Group style={{padding: "0 0 0 16px"}} controlId={'form' + title} >
              <Form.Label><b>{title}</b></Form.Label>
              <Row>
                <Col sm={2} style={{margin: "auto", textAlign: "center"}}>
                  <Form.Check
                    inline
                    type="radio"
                    name={name}
                    id={name + "-1"}
                    value="1"
                    style={{margin: "0"}}
                    onChange={(e) => updateState(name, e)}
                  />
                </Col>
                <Col sm={2} style={{textAlign: "center"}}>
                  <Form.Check
                    inline type="radio"
                    name={name}
                    id={name + "-2"}
                    value="2"
                    style={{margin: "0"}}
                    onChange={(e) => updateState(name, e)}
                  />
                </Col>
                <Col sm={2} style={{textAlign: "center"}}>
                  <Form.Check
                    inline
                    type="radio"
                    name={name}
                    id={name + "-3"}
                    value="3"
                    style={{margin: "0"}}
                    onChange={(e) => updateState(name, e)}
                  />
                </Col>
                <Col sm={2} style={{textAlign: "center"}}>
                  <Form.Check
                    inline
                    type="radio"
                    name={name}
                    id={name + "-4"}
                    value="4"
                    style={{margin: "0"}}
                    onChange={(e) => updateState(name, e)}
                  />
                </Col>
                <Col sm={2} style={{margin: "auto", textAlign: "center"}}>
                  <Form.Check
                    inline
                    type="radio"
                    name={name}
                    id={name + "-5"}
                    value="5"
                    style={{margin: "0"}}
                    onChange={(e) => updateState(name, e)}
                  />
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
              <StarRating setRating={setRating}/>
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
            <Form.Label><h5>Review Summary:</h5></Form.Label>
              <Form.Control
                type="text"
                maxLength="60"
                placeholder="Example: Best purchase ever!"
                onChange={(e) => setSummary(e.target.value)}
              />
          </Form.Group>

          <Form.Group controlId="formBody">
            <Form.Label  style={{padding:"12px 0 0 0"}}><h5>Review Body:</h5></Form.Label>
              <Form.Control
                as="textarea"
                maxLength="1000"
                style={{height: '100px'}}
                placeholder="Why did you like the product or not?"
                onChange={(e) => setBody(e.target.value)}
              />
          </Form.Group>

          <Form.Group controlId="formPictures">
            <Form.Label style={{padding:"12px 0 0 0"}}><h5>Upload your photos</h5></Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={(e) => setPhotos(photos.push(e.target.value))}
              />
          </Form.Group>

          <Form.Group controlId="formNickname">
            <Form.Label style={{padding:"12px 0 0 0"}}><h5>What is your nickname?</h5></Form.Label>
              <Form.Control
                type="text"
                maxLength="60"
                placeholder="Example: jackson11!"
                onChange={(e) => setNickname(e.target.value)}
              />
              <p>For privacy reasons, do not use your full name or email address</p>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label><h5>Your email:</h5></Form.Label>
              <Form.Control
                type="email"
                maxLength="60"
                placeholder="Example: jackson11@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
          </Form.Group>

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button type="secondary" onClick={() => setNewReviewClicked(false)}>Cancel</Button>
        <Button type="primary">Submit</Button>
      </Modal.Footer>

    </Modal>
  )
}

export default NewReview;