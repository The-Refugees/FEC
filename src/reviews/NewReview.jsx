import React, {useState} from 'react';
import StarRating from '../../shared/StarRating.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';


const NewReview = (props) => {

  const {newReviewClicked, setNewReviewClicked, productName, productId, characteristics} = props;

  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(null);
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
  const [validated, setValidated] = useState(false);
  const [ratingValidation, setRatingValidation] = useState(false);

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

    const stateValue = {
      size: size,
      width: width,
      comfort: comfort,
      quality: quality,
      length: length,
      fit: fit
    }

    return (
    <Form.Group style={{padding: "0 0 0 16px"}} controlId={'form' + title} required>
              <Form.Label><b>{title}</b> - "{text[stateValue[name] - 1] || 'none selected'}"</Form.Label>
              {validated && !stateValue[name] &&
                <span id="invalidRatingInput" style={{color: "red"}}> - Please make a selection</span>
              }
              <Row style={{justifyContent: "right"}}>
                <Col style={{padding: "0 16px 0 200px"}}>
                  <Row>
                    <Col sm={2} style={{margin: "auto", textAlign: "center"}}>
                      <Form.Check
                        required
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
                        required
                        inline
                        type="radio"
                        name={name}
                        id={name + "-2"}
                        value="2"
                        style={{margin: "0"}}
                        onChange={(e) => updateState(name, e)}
                      />
                    </Col>
                    <Col sm={2} style={{textAlign: "center"}}>
                      <Form.Check
                        required
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
                        required
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
                        required
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
                </Col>
              </Row>
            </Form.Group>
    );
  }

  const ratingText = (rating) => {
    const ratingStrings = {
      1: '"Poor"',
      2: '"Fair"',
      3: '"Average"',
      4: '"Good"',
      5: '"Great"'
    }
    return <div><b>{ratingStrings[rating]}</b></div>;
  }


  let newReviewData = {
    product_id: productId,
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: nickname,
    email: email,
    photos: photos,
    characteristics: {}
  }

  if (characteristics.Size) {newReviewData.[characteristics.Size.id] = size}
  if (characteristics.Width) {newReviewData.[characteristics.Width.id] = width}
  if (characteristics.Comfort) {newReviewData.[characteristics.Comfort.id] = comfort}
  if (characteristics.Quality) {newReviewData.[characteristics.Quality.id] = quality}
  if (characteristics.Fit) {newReviewData.[characteristics.Fit.id] = fit}
  if (characteristics.Length) {newReviewData.[characteristics.Length.id] = length}

  const handleSubmit = (e) => {

    if (!(document.getElementById('newReviewForm')).checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else if (!rating) {
      e.preventDefault();
      e.stopPropagation();
    } else {

      console.log('submitted review form');
      if (!summary) {
        setSummary(body.slice(0, 30) + ' ...');
      }
      e.preventDefault();
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews', newReviewData, {headers: {Authorization: AUTH_TOKEN }})
        .then((res) => {
          e.preventDefault();
          console.log(res);
          alert('success');
          setNewReviewClicked(false);
        })
        .catch((err) => {
          if (err) {
            e.preventDefault();
            console.log('ERROR POSTING REVIEW: ' + err);
            console.log(err.response);
            alert('error');
          }
        });
    }

    setValidated(true);
    setRatingValidation(true);
  }

  return (
    <Modal
      centered
      backdrop="static"
      size="lg"
      id="new-review"
      show={newReviewClicked}
      onHide={() => setNewReviewClicked(false)}
    >

      <Modal.Header closeButton>
        <Modal.Title>Write Your Review</Modal.Title>
      </Modal.Header>

        <h6 style={{padding: "16px"}}>About the <i>{productName}</i></h6>

      <Modal.Body>

        <Form noValidate validated={validated} id="newReviewForm" onSubmit={handleSubmit}>

          <Form.Group controlId="formRating" required>
            <Form.Label><h5>Overall Rating</h5></Form.Label>
            <Row style={{padding: "0 0 12px 22px"}}>
              <Col sm={3}>
                <StarRating setRating={setRating} />
                {!rating &&
                ratingValidation &&
                <span id="invalidRatingInput" style={{color: "red"}}>Please select a rating</span>}
              </Col>
              <Col sm={2}>
                {ratingText(rating)}
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="formRecommend">
            <Form.Label><h5>Do you recommend this product?</h5></Form.Label>
              <Form.Check
                required
                type="radio"
                name="recommend"
                value="yes"
                id="recommendYes"
                label="Yes"
                onChange={() => setRecommend(true)}
                style={{margin: "0 0 0 20px"}}
              >
              </Form.Check>
              <Form.Check
                required
                type="radio"
                name="recommend"
                value="no"
                id="recommendNo"
                label="No"
                onChange={() => setRecommend(false)}
                style={{margin: "0 0 0 20px"}}
              >
              </Form.Check>
              {validated &&
              (!(document.getElementById('recommendNo')).checkValidity() ||
              !(document.getElementById('recommendYes')).checkValidity()) &&
                <span id="invalidRatingInput" style={{color: "red"}}>Please make a selection</span>
              }
          </Form.Group>

          <Form.Label style={{padding: "12px 0 0 0 "}}><h5>Characteristics</h5></Form.Label>
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
                required
                as="textarea"
                minLength="50"
                maxLength="1000"
                style={{height: '100px'}}
                placeholder="Why did you like the product or not?"
                onChange={(e) => setBody(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a review of at least 50 characters in length
              </Form.Control.Feedback>
              <Form.Text
                id="reviewBodyHelp"
                muted
                style={{padding: "0 0 0 20px"}}
              >
                {body.length < 50 ?
                  'Minimum required characters left: ' + (50 - body.length) :
                  'Minimum reached'}
              </Form.Text>
          </Form.Group>

          <Form.Group controlId="reviewFormPhotos">
            <Form.Label style={{padding:"12px 0 0 0"}}><h5>Upload your photos</h5></Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={(e) => setPhotos(photos.push(e.target.value))}
              />
          </Form.Group>

          <Form.Group controlId="reviewFormNickname">
            <Form.Label style={{padding:"12px 0 0 0"}}><h5>What is your nickname?</h5></Form.Label>
              <Form.Control
                required
                type="text"
                maxLength="60"
                placeholder="Example: jackson11!"
                onChange={(e) => setNickname(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a nickname
              </Form.Control.Feedback>
              <Form.Text muted style={{padding: "0 0 16px 20px"}}>For privacy reasons, do not use your full name or email address</Form.Text>
          </Form.Group>

          <Form.Group controlId="reviewFormEmail">
            <Form.Label><h5>Your email:</h5></Form.Label>
              <Form.Control
                required
                type="email"
                maxLength="60"
                placeholder="Example: jackson11@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address
              </Form.Control.Feedback>
              <Form.Text muted style={{padding: "0 0 16px 20px"}}>For authentication reasons, you will not be emailed</Form.Text>
          </Form.Group>

      <Modal.Footer>
        <Button type="secondary"id="reviewFormCancel"
            onClick={() => setNewReviewClicked(false)}>Cancel</Button>
        <Button type="submit" id="reviewFormSubmit" >Submit</Button>
      </Modal.Footer>

        </Form>

      </Modal.Body>


    </Modal>
  )
}

export default NewReview;