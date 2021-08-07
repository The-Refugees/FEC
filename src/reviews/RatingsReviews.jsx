import React, {useState, useEffect} from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import {Container, Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import AUTH_TOKEN from '../config.js';


const RatingsReviews = (props) => {

  const {productId} = props;
  const [isLoading, setLoading] = useState(true);
  const [newReviewClicked, setNewReviewClicked] = useState(false);
  const [sort, setSort] = useState('relevant');
  const [reviewPage, setReviewPage] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState();
  const [totalReviews, setTotalReviews] = useState(0);


  useEffect(() => {

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/?page=${reviewPage}&count=2&sort=${sort}&product_id=${productId}`,
    {headers: {Authorization: AUTH_TOKEN }}
    )
    .then((res) => {
      let newReviews = reviews.concat(res.data.results);
      setReviews(newReviews);
    })
    .catch((err) => {
      if (err) {
        console.log('ERROR GETTING REVIEWS: ' + err);
      }
    });

  },[reviewPage, sort, productId]);


  useEffect(() => {

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta/?product_id=${productId}`, {headers: {Authorization: AUTH_TOKEN }})
    .then((res) => {
      var count = Object.values(res.data.ratings).reduce((acc, val) => acc + Number(val), 0);
      setRatings(res.data);
      setTotalReviews(count);
      setLoading(false);
    })
    .catch((err) => {
      if (err) {
        console.log('ERROR GETTING RATINGS: ' + err);
      }
    });

  }, [productId])


  const handleSort = (sortBy) => {
    setReviews([]);
    setReviewPage(1);
    setSort(sortBy);
  }


  if (isLoading) {
    return (
      <Container>
        <Row>
          <h3>Ratings and Reviews</h3>
        </Row>
        <Row>
          <div id="loading">
            <img src="../../lib/img/Spinner.gif" alt="page is loading spinner"/>
          </div>
        </Row>
      </Container>
    )
  }

  return (
    <Container id="ratingsreviews" style={{padding: "50px 12px 100px 12px"}}>
      <Row>
        <h3>Ratings and Reviews</h3>
      </Row>
      <Row>

        <Col sm={4} id="ratings">
          <Ratings ratings={ratings} reviewsCount={totalReviews} />
          <Row>
            <Col sm={10}>
              <Button
                id="customButton"
                onClick={() => setNewReviewClicked(!newReviewClicked)}
              >
                Write New Review
              </Button>
            </Col>
          </Row>
        </Col>

        { totalReviews &&
          <Col sm={8} style={{padding: "0 0 0 36px"}}>
            <Reviews
              reviews={reviews}
              reviewsCount={totalReviews}
              newReviewClicked={newReviewClicked}
              setNewReviewClicked={setNewReviewClicked}
              handleSort={handleSort}
              productId={productId}
              productName={props.productName}
              characteristics={ratings.characteristics}
            />
            <Row>
              <Col sm={10}>
                {totalReviews > 2 &&
                  reviewPage * 2 < totalReviews &&
                  <Button
                    id="customButton"
                    onClick={() => setReviewPage(reviewPage + 1)}
                  >
                    More Reviews
                  </Button>
                }
              </Col>
            </Row>
          </Col>
        }

      </Row>

    </Container>
  )
}

export default RatingsReviews;