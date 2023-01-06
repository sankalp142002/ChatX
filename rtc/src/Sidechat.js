import { Avatar } from '@mui/material'
import React from 'react'
import "./sidechat.css"

function sidechat() {
  return (
    <div className='sideChat'>
      <Avatar src='https://source.unsplash.com/random/landscape'/>
      <div className="info">
        <h2>
            Room-1
        </h2>
        <p>This is the last meassage</p>
      </div>
    </div>
  )
}

export default sidechat
