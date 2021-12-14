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
                <Card.Img className="avator" variant="top" src="https://media-exp1.licdn.com/dms/image/C5603AQGAxzGj04u7eQ/profile-displayphoto-shrink_400_400/0/1601211881147?e=1645056000&v=beta&t=QToey__4qM5YLNivbDZVmc6NvY_0kBt95nQspTSyOOI" />
                <Card.Body>
                    <Card.Title  className="info1">Anil Dani</Card.Title>
                    <Card.Text  className="info2">
                    Backend Developer 
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <DnsIcon />NODE JS</ListGroupItem>
                    <ListGroupItem>
                        <StorageIcon />MONGO DB</ListGroupItem>
                    <ListGroupItem>
                        <ScreenShareIcon />JAVA</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button variant="dark" className="btnlink" href="https://github.com/anildani36">
                        <GitHubIcon /> Github</Button>
                    <Button variant="primary" className="btnlink1" href="https://linkedin.com/in/anildani36">
                        <LinkedInIcon /> LinkedIn</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TeamCard
