import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

function Jeju() {
    const [jejuWeather, setJejuWeather] = useState({});
    const [dayDate, setDayDate] = useState("");

    /* 
        렌더링할때 디자인을 조금 이쁘게 해서 
        정보가 부족한 부분을 보완할 수 있도록 해야겠다.
    */

    useEffect(() => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=jeju&appid=811b0a454728fbd5b85ea8e5dd837350&mode=json&units=metric"
        const iconUrl = `http://openweathermap.org/img/wn/10d@2x.png`
        axios
            .get(url)
            .then((data) => {
                const iconUrl = `http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`;

                let date_sunrise = new Date(data.data.sys.sunrise * 1000);
                let date_sunset = new Date(data.data.sys.sunset * 1000);

                let sunrise = `${date_sunrise.getHours()}시 ${date_sunrise.getMinutes()}분`
                let sunset = `${date_sunset.getHours()}시 ${date_sunset.getMinutes()}분`

                const objectTemp = {
                    cityName: data.data.name,
                    sunrise,
                    sunset,
                    weather: data.data.weather[0].main,
                    windSpeed: data.data.wind.speed,
                    temp: data.data.main.temp,
                    icon: iconUrl
                };
                setJejuWeather(objectTemp);
                const _Date = new Date;
                const stringTemp = `
                    ${_Date.getFullYear()}년 ${_Date.getMonth() + 1}월 ${_Date.getDate()}일
                    ${_Date.getHours()}시 ${_Date.getMinutes()}분
                    `
                setDayDate(stringTemp)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <Container fluid style={{ textAlign: "center" }}>
            <Image src={jejuWeather.icon} />
            <br></br>
            <Row style={{ marginTop: "20px" }}>
                <Row>
                    <Col />
                    <Col md="auto">{dayDate}</Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col md="auto">{jejuWeather.cityName}</Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col md="auto">{Math.round(jejuWeather.temp)}도</Col>
                    <Col /></Row>
                <Row>
                    <Col />
                    <Col md="auto">일출 : {jejuWeather.sunrise}</Col>
                    <Col /></Row>
                <Row>
                    <Col />
                    <Col md="auto">일몰 : {jejuWeather.sunset}</Col>
                    <Col />
                </Row>
                <Row>
                    <Col />
                    <Col md="auto">풍속 : {jejuWeather.windSpeed}</Col>
                    <Col />
                </Row>
            </Row>
        </Container>
    )
}

export default Jeju
