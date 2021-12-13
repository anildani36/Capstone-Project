import React from 'react'
import TeamCard from './TeamCard'
import { Card } from 'react-bootstrap'
import '../css/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerImage from '../asserts/cake131.jpg';

function About() {
    return (
        <div className="about" style={{backgroundImage: `url(${BannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'98.92vw',
        height:'100vh' }}>
            <div className="info">
                <Card>
                    <Card.Title>What is Project About?</Card.Title>
                    <Card.Body>Sweet Basket is a online ordering platform where everyone can order cakes, chocolates,cookies etc.. from various shops and home bakers.</Card.Body>
                </Card>
            </div>
            <div>
                <div className="teaminfo">
                    <h3>Team Info</h3>
                    
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
            </div>
        </div>
    )
}

export default About
