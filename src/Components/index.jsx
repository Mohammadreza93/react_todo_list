import React from 'react';
import Appbar from "./Appbar.jsx";
import Users from "./Users.jsx";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home.jsx";
import About from "./About.jsx";
import Login from "./Login.jsx";
import SignUp from './SignUp.jsx'
import Profile from "./Profile.jsx";

const Index = () => {
    return (
        <div>
            <Appbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'signup'} element={<SignUp/>}/>
                <Route path={'profile'} element={<Profile/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </div>
    );
};

export default Index;