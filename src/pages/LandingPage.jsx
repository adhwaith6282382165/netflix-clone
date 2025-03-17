import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <>
      {/* first scection */}
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
        <Row>
          <Col>
            <h3 className='textStyle'>WELCOME TO <span className='text-warning'>MEDIA PLAYER</span></h3>
            <p className='textStyle mt-4' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, ipsa, autem natus sunt cum quos repellat neque, consequatur quisquam totam cupiditate! Sed tempore officiis quibusdam cupiditate rem optio error molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reiciendis inventore amet officiis, tempora hic? Quasi tenetur earum, ipsum necessitatibus, itaque, facilis perferendis numquam corporis accusantium provident ipsa ex quas?</p>
            <Link to={'/home'}>
              <button className='btn btn-warning mt-3 '>GET STARTED <i className="fa-solid fa-arrow-right"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" width={'400px'} className='ms-5' />
          </Col>
        </Row>
      </Container>
      {/* second section */}
      <div className='container'>
        <h3 className='textStyle'>FEATURES</h3>
        <div className='d-flex align-items-center justify-content-evenly mt-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>ADD VIDEOS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="primary">ADD VIDEOS</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>VIEW VIDEOS</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="primary">VIEW VIDEOS</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>WATCH HISTORY</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/watch'}>
                <Button variant="primary">VIEW HISTORY</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
 
      <Container className='container mt-5 mb-5 border border-2 border-secondary rounded p-5'>
        <Row>
          <Col>
            
            <p className='textStyle'><span className='fs-5 fw-bolder'></span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam temporibus, alias doloribus atque nesciunt culpa earum perspiciatis, corporis nam, odio porro.
              Reiciendis non asperiores veritatis porro laborum qui quo dignissimos!</p>
            <p className='textStyle'><span className='fs-5 fw-bolder'></span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam temporibus, alias doloribus atque nesciunt culpa earum perspiciatis, corporis nam, odio porro.
              Reiciendis non asperiores veritatis porro laborum qui quo dignissimos!</p>
            <p className='textStyle'><span className='fs-5 fw-bolder'></span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam temporibus, alias doloribus atque nesciunt culpa earum perspiciatis, corporis nam, odio porro.
              Reiciendis non asperiores veritatis porro laborum qui quo dignissimos!</p>
          </Col>
          <Col>
            <div>
              <iframe width="100%" height="400px" src="https://www.youtube.com/embed/ohi8TNU_Rg4" title="Damru - Yaatra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  )
}

export default LandingPage