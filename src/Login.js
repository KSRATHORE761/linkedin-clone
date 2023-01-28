import React, { useState } from 'react';
import {login} from './features/userSlice'
import { useDispatch } from 'react-redux';
import {auth} from './firebase'
import './Login.css';

function Login() {

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[name,setName] = useState('');
  const[profiePic,setProfiePic] = useState('');

  const dispatch = useDispatch();
  

  const register = () =>{
    if(!name){
      return alert('Please enter a full name!');
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:profiePic,
      })
      .then(()=>{
        dispatch(login({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:name,
          photoUrl:profiePic,
        }))
      })
    })
    .catch((error)=>alert(error));
  }


  const loginToApp =(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth =>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        photoUrl:userAuth.user.photoURL,
      }))
    })
    .catch((error) =>alert(error));
  }

  return (
    <div className='login'>
    <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt=""></img>
    
    <form>
      <input type='text' placeholder='Full name (required if registering)' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type='text' placeholder='Profile pic URL(optional)' 
      value={profiePic}
      onChange={(e)=>setProfiePic(e.target.value)}/>
      <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button type='submit' onClick={loginToApp}>Sign In</button>
    </form>
    <p>
      Not a member?
      <span className='login__register' onClick={register}>Register Now</span>
    </p>
    </div>
  )
}

export default Login
