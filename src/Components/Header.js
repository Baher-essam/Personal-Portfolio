import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../Assets/badges/logo.gif';

// const Header = () =>{}

class HeaderComponent extends Component{
    render(){
        return(
                <header id="Header" className="Header">
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                    <Navbar bg="transparent" expand="lg" fixed='top'>
                        <Container>
                            <Navbar.Brand as={NavLink} to="/" className="logo"> <img src={logo} alt="logo" width={39} height={39}/> </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav">
                                <div className="collapse-group">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="bg bg1"></div>
                                <div className="bg bg2"></div>
                            </Navbar.Toggle>
                            <Navbar.Collapse className="" id="basic-navbar-nav">
                                <Nav className="ms-auto text-white">
                                    {/* <Nav.Link className="nav-item" as={NavLink} exact to={'/'}>Home</Nav.Link> */}
                                    {/* <Nav.Link className="nav-item" as={NavLink} exact to={"#projects"}>Projects</Nav.Link> */}
                                    <a href='/' className="nav-item px-1">Home</a>
                                    <a href='/#aboutMe' className="nav-item px-1">About Me</a> 
                                    <a href='/#services' className="nav-item px-1">Services</a>
                                    <a href="/#projects" className="nav-item px-1" >Projects</a>
                                    <a href="/#contact" className="nav-item px-1" >Contact</a>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            )
        }
}

export default HeaderComponent;