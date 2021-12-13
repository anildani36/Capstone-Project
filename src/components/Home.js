import Button from '@restart/ui/esm/Button';
import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../asserts/tao1.jpg';
import '../css/Home.css';
import {Carousel} from 'react-bootstrap';
import Dan from '../asserts/ban1.jpg';
import Dans from '../asserts/ban6.jpg';
import Danss from '../asserts/ban4.jpg';
import Dax from '../asserts/food21.jpg';






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
            
 </div>
 
    )
}

export default Home
