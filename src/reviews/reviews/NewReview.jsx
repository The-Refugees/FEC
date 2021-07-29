import React from 'react';
import BodyInfo from './write_review/BodyInfo.jsx';
import RatingsChars from './write_review/RatingsChars.jsx';
import MediaUpload from './write_review/MediaUpload.jsx';
import StarRating from '../../star_rating/StarRating.jsx';
import { Row } from 'react-bootstrap';


const NewReview = (props) => {

  // figure out how to make a pop-out modal

  return (
    <div id="new-review">
      --New Review Modal--
      <StarRating />
      <BodyInfo />
      <RatingsChars />
      <MediaUpload />
    </div>
  )
}

export default NewReview;