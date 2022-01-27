import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Test from "../components/Test";
import Navbarr from "../components/Navbarr";

function AppRoute() {
    return (
        <Router>
            <Navbarr/>
            <Routes>
               <Route path="/test" element={<Test/>}></Route> 
            </Routes>
        </Router> 
    )
}

export default AppRoute
