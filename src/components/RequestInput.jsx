import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { dbService } from "../fbase";

function RequestInput({ user }) {
    const [memoText, setMemoText] = useState("");

    useEffect(()=>{
       
    },[])

    const onChange = (event) => {
        const { target : { value }} = event;
        setMemoText(value);
        
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("memo").add({
            // nweet: nweet
            text : memoText,
            createdAt: Date.now(),
            creator: user.multiFactor.user.email,
            // 로그인한사람이 누군지 알기위한 함수호출
            creatorId: user.multiFactor.user.uid
        });
        setMemoText("")
    }
    return (
        <>
            <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ height: "100px" }}
            >
                <Form.Label>Memo</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Enter memo"
                onChange={onChange}
                value={memoText}
                 />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                onClick={onSubmit}
            >
                Submit
            </Button>
        </>
    )
}

export default RequestInput
