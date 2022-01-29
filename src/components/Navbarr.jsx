import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from "react-router-dom";

// Navbarr 컴포넌트 position: fixed; 로 바꾸면 좋을 듯
// style={{position: "sticky"}} fixed="top" 이걸로 고정함.

function Navbarr() {
    return (
        <Navbar bg="light" expand="lg" style={{ position: "sticky" }} fixed="top">
            <Container>
                <Navbar.Brand href="/portfolio">박주홍</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* Navbar.Collapse id="basic-navbar-nav" 이게 왼쪽으로 메뉴들을 모아줌*/}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/jeju">제주</NavLink>
                        <NavLink to="/memo">메모장</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarr
