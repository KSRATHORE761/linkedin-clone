import React from 'react';
import './App.css';
// import {auth} from './firebase'
 import { useSelector } from 'react-redux';
// import { setActiveUser,setUserLogoutState,selectUserName,selectUserEmail } from './features/userSlice';
import { selectUser } from './features/userSlice';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar'; 
import Feed from './Feed'; 
import Widgets from './Widgets';


function App() {
  // const dispatch = useDispatch();
   const user = useSelector(selectUser);  
  return (
    <div className="app">
     <Header />
    {!user ? (
    <Login/>
    ): (
      <div className='app__body'>
      {/* <button type ="button" onClick={logoutOfApp}>Sign Out</button> */}
      <Sidebar/>
      <Feed/>
    <Widgets/>
    </div>
    )}

    </div>
  );
}


export default App;
