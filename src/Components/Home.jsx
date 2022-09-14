import React from 'react';
import {Button, Typography} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Typography variant={'h5'} sx={{p: 2}}>Home page</Typography>
        </div>
    );
};

export default Home;