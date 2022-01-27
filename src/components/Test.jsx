import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Test() {
    const [jejuWeather, setJejuWeather] = useState({});

    /* 
        렌더링할때 디자인을 조금 이쁘게 해서 
        정보가 부족한 부분을 보완할 수 있도록 해야겠다.
    */
    
    useEffect(()=>{
        const url = "https://api.openweathermap.org/data/2.5/weather?q=jeju&appid=811b0a454728fbd5b85ea8e5dd837350&mode=json"
        axios
        .get(url)
        .then((data)=>{
            const objectTemp = {
                cityName : data.data.name,
                sunrise : data.data.sys.sunrise,
                sunset : data.data.sys.sunset,
                weather: data.data.weather[0].main,
                windSpeed : data.data.wind.speed,
                temp : data.data.main.temp
            };
            setJejuWeather(objectTemp);
            console.log(objectTemp)
        })
        .catch((error) => {
            console.log(error);
        })
    },[])
    
    return (
        <Container fluid>
            <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3</Col>
                <Col >3 of 3</Col>
            </Row>
            <Row>
                <Col sm={6}>1 of 3</Col>
                <Col >2 of 3</Col>
                <Col >3 of 3</Col>
            </Row>
        </Container>
    )
}

export default Test
