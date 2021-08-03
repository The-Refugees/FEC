import React, {useState} from 'react';
import ReviewList from './ReviewList.jsx'
import NewReview from './NewReview.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';



const Reviews = (props) => {

  const {reviews, reviewsCount, newReviewClicked, setNewReviewClicked, handleSort} = props;
  const [sortTitle, setSortTitle] = useState('Relevance');


  return (
    <Col id="reviews">
      <Row>
        <Col sm="auto" style={{padding: "0 0 0 12px"}}>
          <span style={{fontSize: "16px"}}>
            {reviewsCount} reviews, sorted by
          </span>
        </Col>
        <Col sm="auto">
          <Dropdown>

            <Dropdown.Toggle as="span" id="sort-dropdown">
              <b>{sortTitle}</b>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  handleSort('relevant');
                  setSortTitle('Relevance');
                }}
              >
                Relevance
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => {
                  handleSort('helpful');
                  setSortTitle('Helpfulness');
                }}
              >
                Helpfulness
              </Dropdown.Item>

              <Dropdown.Item
                onClick={() => {
                  handleSort('newest');
                  setSortTitle('Newest');
                }}
              >
                Newest
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <ReviewList reviews={reviews} />
      </Row>
      {newReviewClicked &&
        <NewReview
          newReviewClicked={newReviewClicked}
          setNewReviewClicked={setNewReviewClicked}
        />
      }
    </Col>
  )
}

export default Reviews;