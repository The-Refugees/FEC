import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { dateParser } from '../../shared/helpers.js';
import AvgStarRating from '../../shared/AvgStarRating.jsx';

const ReviewTile = (props) => {

  let {review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos} = props.review;


  return (
    <Card className="review-tile">
      <Row>
        <Card.Header>
          <Row>
            <Col sm={5} md={4} lg={3}>
              <AvgStarRating rating={rating} width="20px" height="20px" notPadded={true} />
            </Col>
            <Col sm={7} style={{textAlign: "right"}}>
              {dateParser(date)}
            </Col>
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

        <Card.Text>
          <em>--{reviewer_name}</em>
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
              <b>Response from seller: </b> {response}
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