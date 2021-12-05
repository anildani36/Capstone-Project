import React from 'react'
import BannerImage from '../asserts/cake14.jpg';


function Services() {
    return (
        <div className="services" style={{backgroundImage: `url(${BannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'100vw',
        height:'100vh' }}>


            <h1> Our Services </h1>

 </div>
    )
}

export default Services
