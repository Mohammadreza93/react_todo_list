import React from 'react';
import {useRecoilValue} from 'recoil'
import {User} from '../Atom.js'
import {Box, Typography} from "@mui/material";

const Profile = () => {
    const user = useRecoilValue(User);
    return (
        <Box sx={{p: 2}}>
            <Typography variant={'h5'}>Name: {user.username}</Typography>
            <Typography variant={'h6'}>Email: {user.email}</Typography>
        </Box>
    );
};

export default Profile;