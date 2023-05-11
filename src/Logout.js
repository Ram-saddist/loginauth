import React, { Component } from 'react'
import app from "./firebaseconfig"
import {getAuth,signOut} from 'firebase/auth' 
import {Navigate} from 'react-router-dom'
const auth=getAuth()

export default class Logout extends Component {
  componentDidMount(){
    signOut(auth)
        .then(()=>console.log("signed out successful"))
        .catch((err)=>console.log(err))
  }
  render() {
    return auth?<Navigate to="/"/>:null
  }
}
