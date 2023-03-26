import React, { useState } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { useTranslation } from "react-i18next";

const MyNav = () =>{ 
    const [nav, setNav] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const {t} = useTranslation()
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
      i18n.changeLanguage(event.target.value);
    };
    
    const change = () => {
      if (window.scrollY >= 500) setNav(true);
      else setNav(false);
    };
  
    window.addEventListener("scroll", change);

    const scrollToTop = () => {
        window.scrollTo({ top: 0});
        setExpanded(false)
    }
   
    return (
        <>
            <Navbar expanded={expanded} expand="lg" className={`myNav ${nav ? "navOnScroll" : "staticNav"} ${expanded ? "expandedNav" : "closedNav"}`}>                  
                <Container>
                    <Navbar.Brand id="logo" onClick={scrollToTop}><strong>ALBERTO</strong> SOLDIVIERO</Navbar.Brand>                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={ expanded ? () => setExpanded(false) : () => setExpanded(true)}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-lg-auto">
                            <a className="navLink px-2" href="#about" onClick={() => setExpanded(false)}>{t("navLink.about")}</a>
                            <a className="navLink px-2" href="#work" onClick={() => setExpanded(false)}>{t("navLink.work")}</a>
                            <a className="navLink px-2" href="#contact" onClick={() => setExpanded(false)}>{t("navLink.contact")}</a>
                            <select onChange={changeLanguage}>
                                <option value="en">ENG</option>
                                <option value="it">ITA</option>
                            </select>
                        </Nav>                            
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    )
}

export default MyNav;