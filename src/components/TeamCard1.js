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
                <Card.Img className="avator" variant="top" src="https://avatars.githubusercontent.com/u/65335017?v=4" />
                <Card.Body>
                    <Card.Title  className="info3">DHARANI S</Card.Title>
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
                        <ScreenShareIcon />REACT BOOTSTRAP</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="dark" className="btnlink" href="https://github.com/dharani1303">
                        <GitHubIcon /> Github</Button>
                    <Button variant="primary" className="btnlink1">
                        <LinkedInIcon /> LinkedIn</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TeamCard
