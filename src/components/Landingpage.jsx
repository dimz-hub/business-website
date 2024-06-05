import React from 'react'
import Topsection from './Topsection'
import Topservice from './Topservice'
import Footer from './Footer'
import Contact from './Contact'
import { ContactDetails } from './ContactDetails'
import Hiring from './Hiring'
import Project from './Project'
import Client from './Client'


export default function Landingpage() {
  return (
    <div className='overflow-x-hidden'>
      <Topsection />
      <Topservice />
      <Hiring />
      <Project/>
      <Client />
      <ContactDetails/>
      <Footer/>

    </div>
  )
}
