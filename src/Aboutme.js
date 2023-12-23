import React from 'react'
import axios from 'axios'
import './Aboutme.css'
import { useState,useEffect } from 'react'
const Aboutme = () => {
    let [data,setData]=useState([])
    let [post,setPost]=useState([])
    let [sf,setSF]=useState("")
    let [fv,setFV]=useState("name")
    useEffect(()=>{
        axios.get("https://api.github.com/users/facebook/repos").then((res)=>{
            setData(res.data)
            setPost(res.data)
        })
    },[])
    let fun=(fn)=>{
     for(let i=0;i<post.length-1;i++){
        for(let j=i+1;j<post.length;j++){
            if(post[i][fn]>post[j][fn]){
                let t=post[i]
                post[i]=post[j]
                post[j]=t
            }
        }
     }
     setPost([...post])
    }
    let fun1=(e)=>{
      setSF(e.target.value)
      let reg=new RegExp(e.target.value)
      setPost(data.filter((item)=>reg.test((item)[fv])))
    }
  return (
    <div>
     <input type='text' onChange={fun1} value={sf}/>   
     {post.length>0&& <table border={1}>
    <tr>
        <th onClick={()=>fun('id')}>id</th>
        <th onClick={()=>fun('node_id')}>node_id</th>
        <th onClick={()=>fun('name')}>name</th>
        <th onClick={()=>fun('full_name')}>fullname</th>
        <th>Private</th>
    </tr>
       {
        post.map((item)=>{
            return(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.node_id}</td>
                    <td>{item.name}</td>
                    <td>{item.full_name}</td>
                    <td>{item.private.toString()}</td>
                </tr>
            )
        })
       }
        
        </table>}
    </div>
  )
}

export default Aboutme