import React, {memo} from 'react';
import {useRecoilValue, useResetRecoilState} from 'recoil'
import {User} from '../Atom.js'
import {Box, Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";

const AccountMenu = ({anchorEl, handleClose}) => {
    const user = useRecoilValue(User);
    const defaultValue = useResetRecoilState(User);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    return (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {
                user ? <Box>
                        <MenuItem onClick={() => {
                            navigate('profile');
                            handleClose();
                        }}>Profile</MenuItem>
                        <MenuItem onClick={() => {
                            defaultValue();
                            handleClose();
                            navigate('login')
                        }}>Logout</MenuItem>
                    </Box>
                    : <Box>
                        <MenuItem onClick={() => {
                            navigate('login');
                            handleClose();
                        }
                        }>Log In</MenuItem>
                        <MenuItem onClick={() => {
                            navigate('signup');
                            handleClose();
                        }}>Sign Up</MenuItem>
                    </Box>
            }
        </Menu>
    );
};

export default memo(AccountMenu);