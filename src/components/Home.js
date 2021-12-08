import Button from '@restart/ui/esm/Button';
import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../asserts/cake9.jpg';
import '../css/Home.css';


function Home() {
    return (
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

 </div>
    )
}

export default Home
