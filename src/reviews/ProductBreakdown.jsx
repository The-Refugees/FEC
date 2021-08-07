import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ProductBreakdown = (props) => {

  const {characteristics} = props;

  const slider = {
    "5.0": {
      path: '../lib/img/sliders/ProgressFive.png',
      alt: '5 out of 5 slider indicator'
    },
    "4.5": {
      path: '../lib/img/sliders/ProgressFourHalf.png',
      alt: '4.5 out of 5 slider indicator'
    },
    "4.0": {
      path: '../lib/img/sliders/ProgressFour.png',
      alt: '4 out of 5 slider indicator'
    },
    "3.5": {
      path: '../lib/img/sliders/ProgressThreeHalf.png',
      alt: '3.5 out of 5 slider indicator'
    },
    "3.0": {
      path: '../lib/img/sliders/ProgressThree.png',
      alt: '3 out of 5 slider indicator'
    },
    "2.5": {
      path: '..//lib/img/sliders/ProgressTwoHalf.png',
      alt: '2.5 out of 5 slider indicator'
    },
    "2.0": {
      path: '..//lib/img/sliders/ProgressTwo.png',
      alt: '2 out of 5 slider indicator'
    },
    "1.5": {
      path: '..//lib/img/sliders/ProgressOneHalf.png',
      alt: '1.5 out of 5 slider indicator'
    },
    "1.0": {
      path: '..//lib/img/sliders/ProgressOne.png',
      alt: '1 out of 5 slider indicator'
    }
  }

  const text = {
    Size: ['A size too small', '1/2 size too small', 'Perfect', '1/2 size too large' ,'A size too large'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Okay', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Excellent'],
    Length: ['Too short', 'Slightly short', 'Perfect', 'Slightly long', 'Too long'],
    Fit: ['Too tight', 'Slightly tight', 'Perfect', 'Slightly loose', 'Too loose']
  }

  // round to the nearest .5
  const rounded = (rating) => (Math.round(Number(rating) * 2) / 2).toFixed(1);
  let stars = [];
  const charArray = [];

  for (var char in characteristics) {
    charArray.push({
      name: char,
      avg: rounded(characteristics[char].value)
    })
  }

  return (

    <React.Fragment>
      {charArray.map((char, index) => {
        return (
          <React.Fragment key={char.name + index}>
          <Row>
            {char.name}
          </Row>
          <Row>
            <img
                  src={slider[char.avg].path}
                  // width="200px"
                  // height="50px"
                  alt={slider[char.avg].alt}
                />
          </Row>
          <Row>
            <Col sm={8}>
              <p style={{fontSize: "14px"}}>{text[char.name][0]}</p>
            </Col>
            <Col sm={4}>
              <p style={{fontSize: "14px"}}>{text[char.name][4]}</p>
            </Col>
          </Row>
          </React.Fragment>
        )
      })}
      </React.Fragment>
  );
}

export default ProductBreakdown;