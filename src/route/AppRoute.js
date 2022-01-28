import React, { useState, useEffect } from 'react';
import { authService } from '../fbase';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Jeju from "../components/Jeju";
import Navbarr from "../components/Navbarr";
import Memo from "../components/Memo";

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
        <Router>
            <Navbarr/>
            <Routes>
               <Route path="/jeju" element={<Jeju/>}></Route> 
               <Route path="/memo" element={<Memo user={user === null ? {} : user}/>}></Route> 
            </Routes>
        </Router> 
    )
}

export default AppRoute
