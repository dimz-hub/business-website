import React from 'react'
import Topsection from './Topsection'
import Topservice from './Topservice'
import Footer from './Footer'

export default function Landingpage() {
  return (
    <div className='overflow-x-hidden'>
      <Topsection />
      <Topservice />
      <Footer/>
    </div>
  )
}
