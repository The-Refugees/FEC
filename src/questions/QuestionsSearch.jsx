import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, Card} from 'react-bootstrap';

function QuestionsSearch(props) {
  var sortQuestions = function(input) {
    props.data.sort((item) => {

    })
  }


  return (
    <Card id="searchBar">
      <input style={{width: "100%"}}  placeholder="Have a question? Search for answers..." onChange={e => sortQuestions(e.target.value)}/>
    </Card>
  )
}

export default QuestionsSearch;