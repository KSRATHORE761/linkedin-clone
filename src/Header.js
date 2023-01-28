import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import {auth} from './firebase'
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';




function Header() {
  const dispatch = useDispatch(); 
  const logoutOfApp = () => {
    // dispatch to the store with the logout action
      dispatch(logout());
    // // sign out function from firebase
    auth.signOut();
  };
  return (
    <div className="header">

      <div className="header__left">
      <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn"/>

        <div className="header__search">
        <SearchIcon/>
        <input type="text"></input>
        </div>
      </div>

      <div className='header__right'>
      <HeaderOption Icon={HomeIcon} title="Home"/>
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
      <HeaderOption Icon={ChatIcon} title="Messaging"/>
      <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
      <HeaderOption avatar={true} 
      title="Me" onClick = {logoutOfApp}/>
      </div>
    </div>
  )
}

export default Header
