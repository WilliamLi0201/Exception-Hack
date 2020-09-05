import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Tweeter</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Tweets</Nav.Link>
                <Nav.Link href="/tweet">Create Tweet</Nav.Link>
                <Nav.Link href="/user">Create User</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar