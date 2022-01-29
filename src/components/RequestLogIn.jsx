import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { authService, firebaseInstance } from "../fbase";


function RequestLogIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const { target: { name, value } } = event;

        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value)
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                // firebase sign up
                data = await authService.createUserWithEmailAndPassword(email, password);
            } else {
                // firebase log in
                data = await authService.signInWithEmailAndPassword(email, password);
                console.log("실행됌");
            }
            console.log(data);
            setEmail("");
            setPassword("");
            setError("");
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={onChange}
                />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={onChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button 
            variant="primary"
            type="submit"
            onClick={onSubmit}
            >
                Submit
            </Button>
            <div>
                <button
                 style={{ backgroundColor: "black", color: "white"}}
                 onClick={(event)=>{
                    event.preventDefault();
                    setNewAccount((prev) => !prev);
                 }}
                 >
                {newAccount ? "로그인할게요" : "회원가입할게요"}
                </button>
            </div>
            {error}
        </Form>
    )
}

export default RequestLogIn
