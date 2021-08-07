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
        <Container id="Logo_Header" fluid style={{padding: "30px 12px 50px 12px"}}>
          <Row>
            <p style={{color: "#E9BD43", fontFamily: "Brush Script MT", fontSize: "100px"}}>Passerelle</p>
          </Row>
          <Row>
            <form style={{color: "#E9BD43"}} onSubmit={this.handleProductSubmit}>
              <Row>
                <Col sm={6}>
                  <input type="number" name="productIndex" placeholder="product list" value={this.state.term} onChange={this.inputHandler}/>
                  <Button id='customButton' type="submit"> Get Product</Button>
                </Col>
              </Row>
            </form>
          </Row>
        </Container>
        <Overview product={this.state.currentProduct} />
        <QandA currentId={this.state.currentProduct.id}/>
        <RatingsReviews productId={this.state.currentProduct.id} productName={this.state.currentProduct.name} />
      </React.Fragment>
    );
  };
}

export default App;