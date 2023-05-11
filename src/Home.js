import React,{useState,useEffect} from 'react'
import {db} from './firebaseconfig'

export default function Home() {
  const [list,setList]= useState([])
  useEffect( ()=>{
    async function fetchData(){
    const dataRef= db.collection("messages")
    const snapShot=await dataRef.get()
    setList(snapShot.docs.map((doc)=>(
      {
        myData:doc.data().msg
      }
    )))
    console.log(snapShot)
  }
  fetchData()
  },[])
  return (
    <div>
      {
        list.map((i)=>(
          <p>{i.myData}</p>
        ))
      }
    </div>
  )
}
