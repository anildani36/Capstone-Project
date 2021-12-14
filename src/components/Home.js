import Button from '@restart/ui/esm/Button';
import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../asserts/tao1.jpg';
import { Card, CardGroup} from 'react-bootstrap';
import '../css/Home.css';
import {Carousel} from 'react-bootstrap';
import Dan from '../asserts/ban1.webp';
import Dans from '../asserts/ban6.webp';
import Danss from '../asserts/ban4.webp';
import Dax from '../asserts/food21.webp';
import Band from '../asserts/mount.jpg';
import Pepa from '../asserts/pep1.jpg';
import Pepb from '../asserts/pep2.jpg';
import Pepc from '../asserts/pep3.jpg';








function Home() {
    return (
        <div className='home1'>
        <div className="home" style={{backgroundImage: `url(${BannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'98.92vw',
        height:'100vh' }}>
            <div className="headerContainer">
            <h1>Sweet Basket</h1><br></br>
            <p>Hungry? Why Wait? Grab A Sweet Treat!!!</p>
            <Link to="/Services">
                <Button>Order Now</Button>
            </Link>
            </div>
            <br></br>
        
 </div>
 <div className='someone'  style={{backgroundImage: `url(${Dax})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'98.92vw',
        height:'50vh' }}>
 <div className='somthing'>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Dans}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Dan}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Danss}
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
<div  className='sometimes'  style={{backgroundImage: `url(${Band})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'98.92vw',
        height:'90vh' }}>
<div className='evolve'  style={{ paddingTop:'70px', paddingLeft:'70px',paddingRight:'70px' }}>
  <h3 style={{color:'Cyan ',textAlign:'center' }}>Customers Reviews</h3>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={Pepa} />
    <Card.Body>
      <Card.Title>Carlos Russel</Card.Title>
      <Card.Text>
        The products they are selling are very good. Keep up the Good work!!!.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Pepb} />
    <Card.Body>
      <Card.Title>Rohit Anand</Card.Title>
      <Card.Text>
        There Cakes and Sweets are tast like nothing alike. The quality of the sweets are awesome.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={Pepc} />
    <Card.Body>
      <Card.Title>Emily James</Card.Title>
      <Card.Text>
        I always order products for my family and friends from sweet basket , they provide best products with great offer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
</div>
            
 </div>
 
    )
}

export default Home
