import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import "./chat.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicNoneIcon from '@mui/icons-material/MicNone';
import axios from "./axios"
function Chat({messages}) {

  const [input , setInput] = useState("")

  const sendMessage = async (e) => {
    e.preventDefault()

    await axios.post('/messages/new', {
      "message": input,
      "name": "s",
      "timestamp": "String",
      "received": false
  })

  setInput('')
  }

  return (
    <div className='main_chat'>
      <div className="chat_header">
        <Avatar src='https://source.unsplash.com/random/landscape'/>

        <div className="chat_info">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat_headerRight">
        <IconButton>
            <SearchOutlinedIcon />
            </IconButton>
            <IconButton>
            <AttachFileOutlinedIcon />
            </IconButton>
            <IconButton>
            <MoreVertIcon />
            </IconButton>
        </div>
      </div>
      <div className="chat_body">

      {messages.map((message) => (
                        <p className={`chat_message ${message.received && 'chat_reciever'}`}>
                        <span className='chat_name'>{message.name}</span>
{message.message}
<span className='chat_time'>
  {message.timestamp}
</span>
                        </p>
                ))}
        </div>

        <div className="chat_footer">
          <InsertEmoticonOutlinedIcon />
          <form action="">
            <input value={input} onChange={e => setInput(e.target.value)} type="text" 
            placeholder='Type a massage'            
            />
            <button onClick={sendMessage} type='sibmit'>Send message</button>
          </form>
          <MicNoneIcon />
        </div>
    </div>
  )
}

export default Chat
