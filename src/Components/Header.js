import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";

const Header = () => {
    return (
    <header>
        <AppBar position="static">
        <Toolbar>Hi From Desktop</Toolbar>
        </AppBar>
    </header>
    );
};

export default Header;