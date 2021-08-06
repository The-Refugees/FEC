import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


var StyleSelector = (props) => {
  const [currentStyle, setStyle] = useState(props.info[0]);

  useEffect(()=>{setStyle(props.info[0])}, [props.info[0]])

  var clickHandler = (e) => {
    e.preventDefault();
    props.styleUpdater(e.target.name);
  }

  var selected = (stylename) =>{
    if (stylename === currentStyle) {
      return "true";
    } else {
      return "false";
    }
  }

  var grid = () => {
    var list = props.info[1];
    var numRows = new Array(Math.ceil(list.length/4)).fill(0);
    return numRows.map( (row, i) => {
      return (
        <Row key={'row' + i} className="justify-content-start">
          {list.slice(i*4,i*4+4).map( (style, k)=>{
            return (
              <Col key={'col' + k} md={3} name={selected(style.name)}>
                <Image src={style.photos[0].thumbnail_url} alt={`thumbnail of product ${props.product} style ${style.name}`} thumbnail name={style.name} onClick={clickHandler} height='150' width='95'/>
              </Col>
            );
          })}
        </Row>
      );
    });
  }
  return (
    <div>
      <div><b>STYLE</b> > {currentStyle}</div>
      {grid()}
    </div>
  );
}

export default StyleSelector;