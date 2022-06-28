import React from 'react';
import './sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import Button from '@mui/material/Button';

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon' />
        <SidebarOption />
        <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar;