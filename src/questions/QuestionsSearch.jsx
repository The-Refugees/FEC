import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, Card} from 'react-bootstrap';

function QuestionsSearch() {
  return (
    <Card id="searchBar">
      <input style={{width: "100%"}}  placeholder="Have a question? Search for answers..."/>
    </Card>
  )
}

export default QuestionsSearch;