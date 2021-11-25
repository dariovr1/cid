import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';

const Header = () => {
    return (
    <header>
        <AppBar position="static" elevation={4} style={{ background: '#004f90' }}>
            <Toolbar>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginRight : "auto"}}>
                        <HomeIcon />
                        <h3 style={{fontWeight: 200}}>CID OPTIMIZATION</h3>
                    </div>
                    <div style={{display: 'flex', gap: '15px'}}>
                        <SettingsIcon />
                        <BrightnessMediumIcon />
                        <div class="profileBox" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row-reverse' }}>
                            <span>alisi</span>
                            <AccountCircleIcon />
                        </div>
                    </div>
            </Toolbar>
        </AppBar>
    </header>
    );
};

export default Header;