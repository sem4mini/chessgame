import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card ,Container,Row,Col} from 'react-bootstrap';

const Card3=()=>{
    return(
        <>

        <div className="Card3">
        <Container>
  <Row>
    <Col>       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200" />
  <Card.Body>
    <Card.Title>queen gambit</Card.Title>
    <Card.Text>
      Something
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
    <Col>       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
<Col>       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>

  </Row>
  <Row>
    <Col>       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
    <Col>       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
<Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://picsum.photos/200" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card></Col>
    
  </Row>
  <Row>
     <Col> 1</Col>
     <Col>2</Col> 
  </Row>
  <Row>
      <Col>1</Col>
      <Col>2</Col>
  </Row>
</Container>
</div>
</>


    )
}
export default Card3;