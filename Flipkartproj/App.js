/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal } from 'react-bootstrap';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Dropdown } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="Flipkart"
            style={{ width: '100px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline className="mx-auto">
            <FormControl type="text" placeholder="Search for products" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link onClick={handleShow}><FaUserAlt /> Login</Nav.Link>
            <Nav.Link href="#"><FaShoppingCart /> Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
       <Col xs={6} md={4}>
         <Image  style={{width:150,height:150}}src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=600" rounded />
         <p>Grocery</p>
       </Col>
       <Col xs={6} md={4}>
            <Dropdown>
              <Dropdown.Toggle as={Image} src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" style={{width:150, height:150}} rounded />
              <Dropdown.Menu>
                <Dropdown.Item href="#">Camera & Accessories</Dropdown.Item>
                <Dropdown.Item href="#">Gaming</Dropdown.Item>
                <Dropdown.Item href="#">Laptop Accessories</Dropdown.Item>
                <Dropdown.Item href="#">Mobile Accessory</Dropdown.Item>
                <Dropdown.Item href="#">Power Bank</Dropdown.Item>
                <Dropdown.Item href="#">Smart Home Automation</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p>Appliances</p>
          </Col>
          <Col xs={6} md={4}>
            <Dropdown>
              <Dropdown.Toggle as={Image} src="https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:150, height:150}} rounded />
              <Dropdown.Menu>
                <Dropdown.Item href="#">Men's Wear</Dropdown.Item>
                <Dropdown.Item href="#">Women Ethnic</Dropdown.Item>
                <Dropdown.Item href="#">Men Footwear</Dropdown.Item>
                <Dropdown.Item href="#">Women Footwear</Dropdown.Item>
                <Dropdown.Item href="#">Women Western</Dropdown.Item>
                <Dropdown.Item href="#">Kids</Dropdown.Item>
                <Dropdown.Item href="#">Winter Wear</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p>Fashion</p>
          </Col>
        

       </Row>
       <Row>
      <Col xs={12}>
        <h3>Best of Electronics</h3>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/l/b/h/-original-imagpjxr9zp8ayhw.jpeg?q=70" 
          style={{ width: '100px', height: '120px', objectFit: 'cover', margin: 'auto' }} 
          />
          <Card.Body>
            <Card.Title>Speakers</Card.Title>
            <Card.Text>
            Mivi Fort S180 Soundbar With Sub woofer, 180W, Surround Sound, Made In India 180 W Bluetooth Soundbar  (Black, 2.1 Channel)
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/l/v/q/-original-imagppc7ghqzy8xw.jpeg?q=70" 
          style={{ width: '100px', height: '120px', objectFit: 'cover', margin: 'auto' }} 
          />
          <Card.Body>
            <Card.Title>Monitors</Card.Title>
            <Card.Text>
            SAMSUNG 22 inch Full HD IPS Panel Monitor (LS22C310EAWXXL)  (Response Time: 5 ms, 75 Hz Refresh Rate)
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={6} lg={4}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://rukminim2.flixcart.com/image/612/612/xif0q/projector/r/a/o/-original-imagtr8npfrsbx6s.jpeg?q=70"
          style={{ width: '100px', height: '120px', objectFit: 'cover', margin: 'auto' }} 
          />
          <Card.Body>
            <Card.Title>Projectors</Card.Title>
            <Card.Text>
            Egate i9 Pro (1800 lm / 1 Speaker / Remote Controller) Portable 720p Full HD Native with 1080p Support, Bluetooth
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <h3>Daily Essentials</h3>
      {/* First Column */}
      <Col xs={12} md={4}>
        <Row>
      
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-slipper-flip-flop/l/p/r/10-group-238-aadi-brown-original-imahyq5fhgqugqey.jpeg?q=70" rounded />
            <p>Men's slippers</p>
          </Col>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/s/n/7-441-blue-1234-bruton-blue-orange-original-imag63xdafhdjb4h-bb.jpeg?q=70" rounded />
            <p>Men's sports shoes</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/backpack/i/f/m/18-laptop-backpack-water-resistant-backpack-blue-waterproof-original-imah32tz8ghkgtvd.jpeg?q=70" rounded />
            <p>Bag</p>
          </Col>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/h/7/-original-imagvpakfvggsgg5.jpeg?q=70" rounded />
            <p>Watch</p>
          </Col>
        </Row>
      </Col>

      {/* Second Column */}
      <Col xs={12} md={4}>
        <Row>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/sari/g/m/f/free-rugveda-violetjp-kanjivaram-sarees-kanjivaram-saree-original-imahy5dsmdssawyc.jpeg?q=70" rounded />
            <p>Sarees</p>
          </Col>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/kk8mcnk0/blanket/d/y/i/ultra-soft-warm-single-bed-mink-blanket-for-winter-tiger-print-original-imafzmgkpztwzptz.jpeg?q=70" rounded />
            <p>Bed sheet</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/j/j/j/3-flslipper-flite-tulip-purple-original-imagscf6jpsejzct.jpeg?q=70" rounded />
            <p>Women slippers</p>
          </Col>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/t/d/b/-original-imaggcr4gyktgacq.jpeg?q=70" rounded />
            <p>Women chappal</p>
          </Col>
        </Row>
      </Col>

      {/* Third Column */}
      <Col xs={12} md={4}>
        <Row>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dress/z/o/b/3-4-years-kd-1-134-miss-chief-original-imah2yccug3duanm.jpeg?q=70" rounded />
            <p>Kid's Dresses</p>
          </Col>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/edible-seed/s/f/d/200-basil-seeds-weight-loss-rich-in-omega-fiber-diet-sabja-seed-original-imah2fzntrmbwxvq.jpeg?q=70" rounded />
            <p>Seeds</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/h/v/q/new-stylish-pack-of-8-combo-stuffed-toys-15-inch-multiclour-15-original-imah3haz2drq6kmu.jpeg?q=70" rounded />
            <p>Soft toys</p>
          </Col>
          <Col xs={6}>
            <Image style={{ width: 150, height: 150 }} src="https://rukminim2.flixcart.com/image/612/612/xif0q/stuffed-toy/h/a/r/soft-giant-stuffed-rainbow-huggable-teddybear-toy-for-kids-20-original-imagsyh3vdueghc7.jpeg?q=70" rounded />
            <p>Teddy's</p>
          </Col>
        </Row>
      </Col>
    </Row>

    </>    
  );
};

export default Header;


