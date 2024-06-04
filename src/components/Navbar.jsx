import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='w-[85%] m-[auto] mt-[50px]  bg-[white]  rounded-[20px]'>
    <div className = 'flex  items-center justify-between   '>
        <div className='w-[220px]  bg-[#040D12] p-[25px] flex items-center justify-center '> 
          <img src = '/images/bp-logo.png'  className = 'w-[110px]'/>
        </div>
        <div className = 'flex items-center justify-center gap-[15px] text-[23px] p-[25px]'>
            <span>Who are we?</span>
            <span>services</span>
            <span>Contact Us</span>
        </div>
    </div>

</div>
    </div>
  )
}
