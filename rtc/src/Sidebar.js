import React from 'react'
import "./sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidechat from './Sidechat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="side_header">
        <Avatar src='https://source.unsplash.com/random/cool'/>

        <div className="side_headerRight">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>
            <IconButton>
            <ChatIcon />
            </IconButton>
            <IconButton>
            <MoreVertIcon />
            </IconButton>
        </div>

      </div>

      <div className="side_search">
        <div className="container">
            <SearchOutlinedIcon/>
            <input type="text" placeholder='Search' />
        </div>
      </div>

      <div className="side_chat">
        <Sidechat />

      </div>
    </div>
  )
}

export default Sidebar
