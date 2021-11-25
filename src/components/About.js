import React from 'react'
import TeamCard from './TeamCard'
import { Card } from 'react-bootstrap'
import '../css/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <div className="about">
            <div className="info">
                <Card>
                    <Card.Title>What is Project About?</Card.Title>
                    <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Card.Body>
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
