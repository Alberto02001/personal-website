import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";

const MyNav = () =>{


    return (
        <>
            <Navbar bg="primary" expand="lg" className="myNav">
                <Container>
                    <Navbar.Brand id="logo" href="#home"><strong>ALBERTO</strong> SOLDIVIERO</Navbar.Brand>                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-lg-auto">
                            <a className="navLink px-2" href="#About">ABOUT</a>
                            <a className="navLink px-2" href="#Work">WORK</a>
                            <a className="navLink px-2" href="#Contact">CONTACT</a>
                        </Nav>                            
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNav;