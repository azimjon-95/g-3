import React from 'react'
import "./Car.css"
import logo from "../../assests/Supra.jpeg"

function Car() {
  return (
    <div className='Car'>
      <h1>It is Supra</h1>
      <img src={logo}></img>
    </div>
  )
}

export default Car
