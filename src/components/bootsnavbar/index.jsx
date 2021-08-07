import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"


const bootnavbar = ({ linkTo }) => {

    return (
        <Navbar bg="dark" expand="md" variant="dark" className="px-5">
            <Navbar.Brand as={Link} to={"/"}>
                <img
                    alt=""
                    src="/images/icon.png"
                    width="80"
                    height="70"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/category/PS5"}>PS5</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/PS4"}>PS4</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/PS3"}>PS3</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/XBOX One"}>Xbox One/360</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/XBOX"}>X series</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/category/NintendoSwitch"}>Nintendo Switch</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <CartWidget/>
                </Nav>
            </Navbar.Collapse>

        </Navbar>

    )
}
export default bootnavbar
