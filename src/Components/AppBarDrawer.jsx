import {memo} from 'react';
import {Drawer, List} from "@mui/material";
import ListItems from "./Common/ListItems.jsx";
import {useNavigate} from "react-router-dom";
import {HelpOutline, Home, People} from "@mui/icons-material";

const navList = [
    {name: 'Home', url: '/', icon: <Home/>},
    {name: 'Users', url: 'users', icon: <People/>},
    {name: 'About', url: 'about', icon: <HelpOutline/>}
];

const AppBarDrawer = ({open, handleClose}) => {
    const navigate = useNavigate();
    return (
        <Drawer onClose={handleClose} open={open} ModalProps={{keepMounted: true}}>
            <List>
                {
                    navList?.map((list, i) => <ListItems primary={list.name} disablePadding icon={list.icon}
                                                         onClick={() => {
                                                             navigate(list.url);
                                                             handleClose();
                                                         }}/>
                    )
                }
            </List>
        </Drawer>
    );
};

export default memo(AppBarDrawer);