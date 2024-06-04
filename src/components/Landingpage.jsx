import React from 'react'
import Topsection from './Topsection'
import Topservice from './Topservice'
import Footer from './Footer'
import Contact from './Contact'
import { ContactDetails } from './ContactDetails'

export default function Landingpage() {
  return (
    <div className='overflow-x-hidden'>
      <Topsection />
      <Topservice />
      <ContactDetails/>
      <Footer/>
    </div>
  )
}
