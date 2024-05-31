import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='w-[85%] m-[auto]'>
    <div className = 'flex  items-center justify-between pt-[0px] mt-[15px] pb-[25px] '>
        <div> 
          <img src = '/images/bp-logo.png'  className = 'w-[110px]'/>
        </div>
        <div className = 'flex items-center justify-center gap-[15px] text-[23px]'>
            <span>Who are we?</span>
            <span>services</span>
            <span>Contact Us</span>
        </div>
    </div>

</div>
    </div>
  )
}
