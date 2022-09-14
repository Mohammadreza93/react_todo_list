import React from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import propTypes from 'prop-types'

const ListItems = ({primary, secondary, icon, disablePadding,onClick}) => {
    return (
        <ListItem disablePadding={disablePadding}>
            <ListItemButton onClick={onClick || null}>
                <ListItemIcon>
                    {icon || null}
                </ListItemIcon>
                <ListItemText primary={primary} secondary={secondary || null}/>
            </ListItemButton>
        </ListItem>
    );
};

ListItems.propTypes = {
    icon: propTypes.element,
    primary: propTypes.string.isRequired,
    secondary: propTypes.string,
    disablePadding: propTypes.bool,
}

export default ListItems;