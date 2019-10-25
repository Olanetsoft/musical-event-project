import React from 'react';


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {
    return (
       <drawer
        anchor="right"
        open={props.open}
        onClose={()=> props.onClose(false) }
       >

       </drawer>
    );
};

export default SideDrawer;