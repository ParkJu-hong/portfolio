import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom"

// Navbarr 컴포넌트 position: fixed; 로 바꾸면 좋을 듯
// style={{position: "sticky"}} fixed="top" 이걸로 고정함.

function Navbarr() {
    return (
        <Navbar bg="light" expand="lg" style={{ position: "sticky" }} fixed="top">
            <Container>
                <Navbar.Brand href="/">박주홍</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* Navbar.Collapse id="basic-navbar-nav" 이게 왼쪽으로 메뉴들을 모아줌*/}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav.Link href="/test">제주</Nav.Link> */}
                    <NavDropdown title="도구" id="basic-nav-dropdown">
                        <LinkContainer to="/jeju">
                            <NavDropdown.Item >제주</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/memo">
                            <NavDropdown.Item >메모장</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">프로젝트 소개</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarr
