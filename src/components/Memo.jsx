import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import RequestLogIn from "./RequestLogIn";
import RequestInput from "./RequestInput";
import { dbService } from "../fbase";
import Memos from './Memos';
/*
    아이디 비밀번호 입력하는 란 만들고, 아이디 비번입력해서 해당페이지에서 로그인하면
    메모를 CRUD할 수 있게끔 하자. 

    메모는 누구나 다 보여줄 수 있도록 하자.
    방명록겸 메모
*/

function Memo({ user }) {
    const [memos, setMemos] = useState([]);

    useEffect(() => {
        // 실시간 리얼타임
        // onSnapshot은 기본적으로 데이터베이스에 무슨일이 있을 때, 알림을 받을 것임. 
        // 호출이됌.
        dbService.collection("memo").onSnapshot((snapshot) => {
            const memosArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setMemos(memosArray);
        })
    }, [user])

    return (
        <>

            <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Row>
                    <Col
                        className="FormDataInputBox"
                        style={{ width: "80vw" }}
                    >
                        {Object.keys(user).length !== 0 ?
                            <RequestInput user={user} />
                            : <RequestLogIn />}
                    </Col>
                    <Col
                        className="DataMappingBox"
                        style={{}}
                    >
                        <Memos user={user} memos={memos}/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Memo

/*
{dummyData.map((el)=> {
 return <div key={el.id}>
<div>{el.user}</div>
 {el.comment}
 </div>
})}
*/

