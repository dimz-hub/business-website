import React from 'react'
import Navbar from './Navbar'
import Topbody from './Topbody'

export default function Topsection() {
  return (
    <div>
      <div className=' topsection w-[100vw] h-[100vh]  '>
   <div className = ' h-[100vh] topsection-hero' >

      <Navbar />
      <Topbody />
      
      </div>
   </div>


    </div>
  )
}
