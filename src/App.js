import React,{useEffect,useState} from 'react'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import app from './firebaseconfig'
import Home from './Home'
import Login from './Login'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Logout from './Logout'
import Navbar from './Navbar'
import Storedata from './Storedata'

const auth=getAuth()

export default function App() {
  const [state,setState]=useState()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
        if(user) setState(user)
        else setState(null)
    })
  })
  return state?(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/store" element={<Storedata/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  ):(
    <Login/>
  )
}
