import React, { useState, useEffect } from 'react';
import { authService } from '../fbase';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Switch>
               <Route path="/jeju" ><Jeju/></Route> 
               <Route path="/" ><Memo user={user === null ? {} : user}/></Route> 
               <Route path="/introduce" ><Introduce /></Route>
            </Switch>
        </Router> 
    )
}

export default AppRoute
