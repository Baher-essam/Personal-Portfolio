import React, {useContext} from 'react';
import { MouseContext } from "../context/mouseContext" //cursor 
import {NavLink} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../Assets/badges/logo.gif';

// const Header = () =>{}

const HeaderComponent = () => {
        const headerLinks= [
            {id:1, name:'home', link:'/'},
            {id:2, name:'about me', link:'/#aboutMe'},
            {id:3, name:'Services', link:'/#services'},
            {id:4, name:'Projects', link:'/#projects'},
            {id:5, name:'contact', link:'/#contact'},
        ]
        const {  cursorChangeHandler } = useContext(MouseContext); //cursor
        return(
                <header id="Header" className="Header">
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                    <Navbar bg="transparent" expand="lg" fixed='top'>
                        <Container>
                            <Navbar.Brand 
                                as={NavLink} to="/" className="logo"
                                onMouseEnter={() => cursorChangeHandler("hovered")}
                                onMouseLeave={() => cursorChangeHandler("")}
                            > <img src={logo} alt="logo" width={39} height={39}/> </Navbar.Brand>
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
                                    {headerLinks.map((link) => (
                                        <a 
                                        key={link.id}
                                        href={link.link}
                                        className="nav-item px-1 text-capitalize"
                                        onMouseEnter={() => cursorChangeHandler("hovered")}
                                        onMouseLeave={() => cursorChangeHandler("")}
                                        >{link.name}</a>
                                    ))}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            )
        }
export default HeaderComponent;