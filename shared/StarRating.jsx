import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function StarIcon(props) {
  const { fill = 'none' } = props;
  return (
    <svg className="star" width="30px" height="30px" fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
  );
}

function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return 'gold';
    } else if (!hoverRating && rating >= index) {
      return 'gold';
    }
    return 'none';
  }, [rating, hoverRating, index]);

  return (
      <Col style={{padding: "0px"}}>
        <div
          className ="cursor-pointer"
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={() => onMouseLeave()}
          onClick={() => {
            onSaveRating(index);
            }}>
          <StarIcon fill={fill} />
        </div>
      </Col>
  )
}

const StarRating = (props) => {
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
    props.setRating(index);
  };

  return(
      <Row sm="auto" value={rating}>

          {[1, 2, 3, 4, 5].map((index) => {
            return (

                <RatingIcon
                  key={'star'+index}
                  index={index}
                  rating={rating}
                  hoverRating={hoverRating}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onSaveRating={onSaveRating}
                />

            )
          })}

      </Row>
  );
}


export default StarRating;