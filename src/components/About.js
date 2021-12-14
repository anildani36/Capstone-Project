import React from 'react'
import TeamCard from './TeamCard'
import TeamCard1 from './TeamCard1'
import TeamCard2 from './TeamCard2'
import { Card } from 'react-bootstrap'
import '../css/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BannerImage from '../asserts/cake131.webp';

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
                    <Card.Title style={{color:'MediumVioletRed ',textAlign:'center'}}>Meet The Team</Card.Title>
                    <Card.Body style={{color:'MidnightBlue '}}>The team consist of 3 dedicated members who are learning about the Product Engineering from SOAL from last six months.
                        Currently we are working on our Capstone Project and our idea is to make a Ecommerce kind of website which will deal with the sweets. In country like India where people are crazy
                        about sweets, cakes and other iteams , this website will create a landmark change for those who carves for sweetness. Sweet Basket is a online ordering platform where everyone 
                        can order cakes, chocolates,cookies etc.. from various shops and home bakers. Currently we are working on it so that we can add more features to it.</Card.Body>
                </Card>
            </div>
            <div>
                <div className="teaminfo">
                    <h3>Team Info</h3>
                    
                    <TeamCard />
                    <TeamCard1 />
                    <TeamCard2 />
                </div>
            </div>
        </div>
    )
}

export default About
