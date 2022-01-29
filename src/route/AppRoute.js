import React, { useState, useEffect } from 'react';
import { authService } from '../fbase';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Jeju from "../components/Jeju";
import Navbarr from "../components/Navbarr";
import Memo from "../components/Memo";
import Introduce from '../components/Introduce';

function AppRoute() {
    const [user, setUser] = useState(null);
    
    useEffect(()=> {
        authService.onAuthStateChanged((user)=>{
            if(user){
                
                setUser(user)
            }else{
                console.log("로그인 안됐음");
                setUser(null);
            }
        })
    },[])
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbarr/>
            <Routes>
               <Route path="/jeju" element={<Jeju/>}></Route> 
               <Route path="/" element={<Memo user={user === null ? {} : user}/>}></Route> 
               <Route path="/introduce" element={<Introduce />}></Route>
            </Routes>
        </Router> 
    )
}

export default AppRoute
