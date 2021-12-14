import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import DnsIcon from '@material-ui/icons/Dns'
import StorageIcon from '@material-ui/icons/Storage'
import ScreenShareIcon from '@material-ui/icons/ScreenShare'
import '../css/TeamCard.css'

function TeamCard() {
    return (
        <div className="teamcard">
            <Card style={{ width: '18rem' }}>
                <Card.Img className="avator" variant="top" src="https://media-exp1.licdn.com/dms/image/C4D03AQE9rUz35Ku-bg/profile-displayphoto-shrink_800_800/0/1631894018866?e=1645056000&v=beta&t=Cp_mgJPHAbrIQuDyyLDoCOgLg6v1zafWvpVXa4I2U8Q" />
                <Card.Body>
                    <Card.Title className="info4">Shivam Sikdar</Card.Title>
                    <Card.Text  className="info2">
                    Frontend Developer 
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <DnsIcon />REACT JS</ListGroupItem>
                    <ListGroupItem>
                        <StorageIcon />REACT NATIVE</ListGroupItem>
                    <ListGroupItem>
                        <ScreenShareIcon />REACT REDUX</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="dark" className="btnlink"  href="https://github.com/shivamsikdar">
                        <GitHubIcon /> Github</Button>
                    <Button variant="primary" className="btnlink1" href="https://www.linkedin.com/in/shivam-sikdar-b5022316b">
                        <LinkedInIcon /> LinkedIn</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TeamCard
