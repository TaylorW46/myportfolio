import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false); //determines if user scrolled

    //triggered once a scroll starts
    useEffect(() => {
      const onScroll = () => {
          if (window.scrollY > 50) {
            seScrolled(true);
          }else{
            seScrolled(false);
          }
      }

      window.addEventListener("scroll", onScroll); //triggers the function

      return () => window.removeEventListener("scroll", onScroll); //remove when the component gets removed from the DOM
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value)
    }

    //classname based
    return (
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>; 
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            //based on which link is active we will highlight on the top
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skilld')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Project</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'><img src={} alt="" /></a>
              <a href='#'><img src={} alt="" /></a>
              <a href='#'><img src={} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
        
}