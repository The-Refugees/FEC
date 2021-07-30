import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { dateParser } from '../helpers.js';

const ReviewTile = (props) => {

  let {review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos} = props.review;


  return (
    <Card className="review-tile">
      <Row>
        <Card.Header>
          <Row>
            <Col sm={8}>Rating: {rating}</Col>
            <Col sm={4}>{dateParser(date)}</Col>
          </Row>
        </Card.Header>
      </Row>

        <Card.Title style={{padding: "24px 0 0 0"}}>
          {summary}
        </Card.Title>

      <Card.Body>

        <Card.Text>
          {body}
        </Card.Text>

        <ListGroup>
          {recommend &&
            <ListGroupItem style={{backgroundColor: "rgb(240, 255, 248)"}}>
              <Card.Text>
                I recommend this product &#10003;
              </Card.Text>
            </ListGroupItem>
          }

          {response &&
            <ListGroupItem  style={{backgroundColor: "rgb(240, 250, 255)"}}>
              <b>Response:</b> {response}
            </ListGroupItem>
          }
        </ListGroup>

      </Card.Body>

      <Row>
        <Card.Footer>
          Helpful? Yes &#40;{helpfulness}&#41; | No
        </Card.Footer>
      </Row>
      </Card>

  )
}

export default ReviewTile;