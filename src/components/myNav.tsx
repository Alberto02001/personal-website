import React, { useState } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";

const MyNav = (props) =>{
    const content = props.content   
    const [nav, setNav] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [selectedLaguage, setLanguage] = useState(true);
    props.onSelectLanguage(selectedLaguage); 
    
    const change = () => {
      if (window.scrollY >= 500) setNav(true);
      else setNav(false);
    };
  
    window.addEventListener("scroll", change);

    const selectLenguage = (e : any) => {
        e.target.value === "eng" ? setLanguage(true) : setLanguage(false)
        setExpanded(false)
    };
   
    return (
        <>
            <Navbar expanded={expanded} expand="lg" className={`myNav ${nav ? "navColorScroll" : "navColor"} ${expanded ? "navCloseIcon" : "navIcon"}`}>                  
                <Container>
                    <Navbar.Brand id="logo" href="#home" onClick={() => setExpanded(false)}><strong>ALBERTO</strong> SOLDIVIERO</Navbar.Brand>                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={ expanded ? () => setExpanded(false) : () => setExpanded(true)}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-lg-auto">
                            <a className="navLink px-2" href="#about" onClick={() => setExpanded(false)}>{content.about}</a>
                            <a className="navLink px-2" href="#work" onClick={() => setExpanded(false)}>{content.work}</a>
                            <a className="navLink px-2" href="#contact" onClick={() => setExpanded(false)}>{content.contact}</a>
                            <select id="Lenguage"
                            onChange={selectLenguage}
                            >
                                <option value="eng">ENG</option>
                                <option value="ita">ITA</option>
                            </select>
                        </Nav>                            
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNav;