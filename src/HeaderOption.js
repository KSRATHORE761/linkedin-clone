import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import './HeaderOption.css'
import { selectUser } from "./features/userSlice";

function HeaderOption({avatar,Icon,title,onClick}) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className="headerOption__icons"/>}
      {avatar && (<Avatar className='headerOption__icons' src={user?.photoUrl}>{user?.displayName[0]}</Avatar>)}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
