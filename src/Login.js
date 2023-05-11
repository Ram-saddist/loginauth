import React,{useState} from 'react'
import {getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword} from 'firebase/auth'
import app from './firebaseconfig'

const auth=getAuth()

export default function Login() {
    const auth=getAuth()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    function login(){
        signInWithEmailAndPassword(auth,username,password)
            .then((userCredentials)=>{
                console.log("created successfully")
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    function register(){
        createUserWithEmailAndPassword(auth,username,password)
            .then((userCredentials)=>{
                console.log("created successfully")
            })
            .catch((err)=>{
                console.log(err)
            })
    }
  return (
    <div>
        <p>
            <input 
                placeholder='Enter username' 
                onChange={(e)=>setUsername(e.target.value)}/>
        </p>
        <p>
            <input
                placeholder='Enter password'
                onChange={(e)=>setPassword(e.target.value)}/>
        </p>
        <button onClick={login}>Login</button>
        <p>Don't have an account?? <span className='register' onClick={register}>Register</span></p>
    </div>
  )
}
