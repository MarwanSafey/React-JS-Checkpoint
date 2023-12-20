import React from 'react';
import cat from './cat.JPG';
import dog from './dog.JPG';
import both from './mainPic.JPG';
import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <React.Fragment>
      {/* div with className APP */}
      <div className="App">

        {/* nav bar */}
        <Navbar>
          <Container>
            <Nav className="Nav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <h1>This is my First App</h1>

{/* Card 1*/}
        <div className="card-container">
        <Box
          title="Card 1"
          text="This Is Card 1"
          link="Go somewhere"
          image= {cat} // Pass the image source as a prop
                />  
{/* Card 2*/}
        <Box
          title="Card 2"
          text="This Is Card 2"
          link="Go somewhere"
          image={dog} // Pass the image source as a prop
                /> 
{/* Card 3*/}
        <Box
          title="Card 3"
          text="This Is Card 3"
          link="Go somewhere"
          image={both} // Pass the image source as a prop
                /> 
        </div>
      </div>
        </React.Fragment>
  );
}

const Box = (props) => {
  return (
    <Card className="card">
          <Card.Img className="custom-image" src={props.image}/>
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.text}</Card.Text>
              <Button>{props.link}</Button>
            </Card.Body>
          </Card>
  );
}

export default App;
