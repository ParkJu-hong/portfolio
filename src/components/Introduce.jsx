import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Introduce() {
    return (
        <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <Row>
                <Col
                    style={{ width: "48vw" }}
                >
                    <div>저희 부모님이 사시는 제주의 날씨와 제가 자주 쓰는 메모장을 웹으로 만들어 보았습니다.</div>
                    <br></br>
                    <div>메모장은 로그인하면 누구든 적을 수 있도록 구현하여 방명록처럼 사용이 가능합니다.</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Introduce
