import React,{useState} from 'react'
import app,{db} from './firebaseconfig'
import firebase from 'firebase/compat/app'

export default function Storedata() {
  const [newValue,setNewValue]=useState("")
  async function send(){
    const response=await db.collection("messages").add({
      msg:newValue
    })
    console.log(firebase.firestore.Timestamp.now())
    console.log(response)
    setNewValue("")
  }
  return (
    <div>
        <input value={newValue} onChange={(e)=>setNewValue(e.target.value)}/>
        <button onClick={send}>Submit</button>
    </div>
  )
}
