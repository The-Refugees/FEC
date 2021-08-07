import React from 'react';
import Overview from './overview/overview.jsx'
import QandA from './questions/QandA.jsx';
import RatingsReviews from './reviews/RatingsReviews.jsx';
import axios from 'axios';
import 'react-image-gallery/styles/css/image-gallery.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      currentProduct: {id:24156, category: '', slogan: '', name: ''},
      productList: [{id:24156, category: '', slogan: '', name: ''}]
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/products`)
    .then( (response) => {
      this.setState({
        productList: response.data,
        currentProduct: response.data[0]
      });
    })
    .catch( (err) => {
      console.log('Error on app get request. ', err);
    });
  }

  handleProductSubmit = (e) => {
    e.preventDefault();
    var newItem = this.state.productList.slice()[this.state.term];
    this.setState({currentProduct: newItem})
  }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({term: e.target.value})
  }

//Logo Colors are hard coded here and should be removed when improved style customization is available.
//Productid available at this.state.currentProduct.id for widgets to dynamically pull in and use
  render() {
    return (
      <React.Fragment>
        <Container id="Logo_Header" style={{padding: "50px 12px 100px 12px"}}>
          <Row>
            <h1 style={{color: "#E9BD43"}}>LOGO!</h1>
          </Row>
          <Row>
            <form style={{color: "#E9BD43"}} onSubmit={this.handleProductSubmit}>
              <label >Products available in a list. What index do you want to see?
                <input type="number" name="productIndex" value={this.state.term} onChange={this.inputHandler}/>
                <Button id='customButton' type="submit"> Get Product</Button>
              </label>
            </form>
          </Row>
        </Container>
        <Overview product={this.state.currentProduct}/>
        <QandA currentId={this.state.currentProduct.id}/>
        <RatingsReviews productId='24156' />
      </React.Fragment>
    );
  };
}

export default App;