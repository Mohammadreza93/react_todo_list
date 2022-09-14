import {memo, useState} from 'react'
import {AppBar, Box, IconButton, MenuItem, Toolbar, Typography} from '@mui/material'
import {AccountCircle, Brightness4, Menu as MenuIcon} from '@mui/icons-material'
import {useRecoilState, useRecoilValue} from 'recoil'
import {Mode, User} from '../Atom.js'
import {useNavigate} from "react-router-dom";
import AccountMenu from "./AccountMenu.jsx";
import AppBarDrawer from "./AppBarDrawer.jsx";

const navItems = [{name: 'Home', url: '/'}, {name: 'Users', url: 'users'}, {name: 'About', url: 'about'}]
const Appbar = () => {
    const [mode, setMode] = useRecoilState(Mode);
    const navigate = useNavigate();
    const user = useRecoilValue(User)
    const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <AppBar position={'sticky'}>
            <Toolbar>
                <IconButton sx={{display: {xs: 'flex', md: 'none'}}} onClick={() => setOpenDrawer(true)} edge={'start'}><MenuIcon/></IconButton>

                <AppBarDrawer open={openDrawer} handleClose={() => setOpenDrawer(false)}/>

                <Typography sx={{mx: {xs:1,md:0}, flexGrow: {xs: 1, md: 0,}}}>React Project</Typography>
                <Box sx={{display: {xs: 'none', md: 'flex'}}} display={'inline-flex'} flexGrow={1}>
                    {
                        navItems?.map((item, i) => <MenuItem onClick={() => navigate(item.url)}
                                                             key={i}>{item.name}</MenuItem>)
                    }
                </Box>

                {/* if user log in show username in appbar */}
                {
                    user && <Typography>Welcome {user.username[0].toUpperCase() + user.username.slice(1)}</Typography>
                }

                <IconButton
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
                    <Brightness4/>
                </IconButton>

                <IconButton edge={'end'} onClick={({currentTarget}) => setAnchorEl(currentTarget)}>
                    <AccountCircle/>
                </IconButton>
                <AccountMenu anchorEl={anchorEl} handleClose={() => setAnchorEl(null)}/>


            </Toolbar>
        </AppBar>
    )
}

export default memo(Appbar)