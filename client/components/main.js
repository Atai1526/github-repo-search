import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../assets/scss/main.scss'
import logo from "../assets/images/logo (1).png"





const Main = () => {
  const [username, setUsername] = useState('')
    const History=useHistory()
    const HandleKeyPress=(history)=>{
      if(history.key==="Enter"){
          History.push(`/${username}`)
      }
    }

  return (
    <div className="h-screen flex justify-center items-center flex-col">
        <img className="my-4" src={ logo } alt="cat" width="150"/>
      <div className="bg-white p-6 text-black">
        <input
          type="text"
          className="bg-gray-300 mr-3"
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={HandleKeyPress}
        />
        <Link to={`/${username}`}> Find Repo</Link>
      </div>
    </div>
  )
}


export default Main
