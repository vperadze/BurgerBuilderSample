import React from "react";
import Hoc from '../../hoc/Hoc';
import classes from './Layout.module.css';

const layout = props => (
    <Hoc>
        <div>Toolbar, SideDrawer, backDrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Hoc>
);

export default layout;