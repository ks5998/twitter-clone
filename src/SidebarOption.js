import React from 'react';
import './sidebarOption.css';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function SidebarOption(active) {
  return (
    <div className='sidebarOptions'>
      <div active  className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <HomeIcon />
        <p>Home</p>
      </div>
      <div className='sidebarOption'>
        <SearchIcon />
        <p>Explore</p>
      </div>
      <div className='sidebarOption'>
      <NotificationsNoneIcon />
       <p>Notifications</p>
      </div>
      <div className='sidebarOption'>
      <MailOutlineIcon />
       <p>Messages</p>
      </div>
      <div className='sidebarOption'>
      <BookmarkBorderIcon />
       <p>Bookmarks</p>
      </div>
      <div className='sidebarOption'>
      <ListAltIcon />
       <p>Lists</p>
      </div>
      <div className='sidebarOption'>
      <PermIdentityIcon />
       <p>Profile</p>
      </div>
      <div className='sidebarOption'>
      <MoreHorizIcon />
       <p>More</p>
      </div>
    </div>
  )
}

export default SidebarOption;