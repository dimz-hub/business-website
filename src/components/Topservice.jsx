import React from 'react'
import { Link} from 'react-router-dom'

export default function Topservice() {
  return (
    <div className='services bg-[] w-[100vw] h-[auto]'>
    <div >

<div className='w-[90vw] m-[auto] p-[25px] flex items-center justify-center flex-col ' >

  <h1 className = 'text-[50px] text-[#183D3D] font-[600] mb-[50px] xs:text-[38px]'    >Our Services</h1>
  
  <div className='flex items-center justify-center gap-[20px] mb-[40px] flex-wrap' >
  <div className='w-[300px] h-[250px] bg-[black] text-[white] rounded-[20px] flex flex-col items-center justify-center pt-[20px] p-[10px] gap-[20px] service-col'   >
    <p className = 'font-[700] text-[25px] text-center'>IT Training</p>
     <img src='images/IT-training.png' alt='IT Training' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    Our IT training are delivered in a variety of formats which  includes: In-person training, Online training, Self-paced training
    </p>
  </div>
  <div className='w-[300px] h-[250px] bg-[#183D3D] text-[white] rounded-[20px] flex flex-col items-center p-[10px]  pt-[20px] gap-[20px] service-col justify-center'   >
    <p className = 'font-[700] text-[25px] text-center'>IT Support Services </p>
     <img src='images/support.png' alt='support' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    We offer a broad range of IT support services that help organizations to keep their IT systems running smoothly
    </p>
  </div>
  <div className='w-[300px] h-[250px] bg-[black] text-[white] rounded-[20px] flex flex-col items-center justify-center p-[10px] pt-[20px] gap-[20px] service-col'   >
    <p className = 'font-[700] text-[25px] text-center'>Dashboard analystics and reporting services</p>
     <img src='images/analysis.png' alt='dashboard analysis' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    Our Dashboard analytics and reporting services help organizations to collect, analyze, and visualize data in order to make better decisions
    </p>
  </div>
  <div className='w-[300px] h-[250px] bg-[#183D3D] text-[white] rounded-[20px] flex flex-col items-center justify-center p-[10px] pt-[20px] gap-[20px] service-col'   >
    <p className = 'font-[700] text-[25px] text-center'>Software requirements management  </p>
     <img src='images/realapp.png' alt='software' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    Software requirements management (SRM) is a process for gathering, documenting, and managing the requirements for a software system
    </p>
  </div>
  <div className='w-[300px] h-[250px] bg-[black] text-[white] rounded-[20px] flex flex-col items-center justify-center p-[10px] pt-[20px] gap-[20px] service-col'   >
    <p className = 'font-[700] text-[25px] text-center'>BMC REMEDY value-added company</p>
     <img src='images/BMC.png' alt='bmc' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    As a BMC REMEDY value-added company, we implement, and support BMC REMEDY AR
    </p>
  </div>
 
  <div className='w-[300px] h-[250px] bg-[#183D3D] text-[white] text-[center] rounded-[20px] flex flex-col items-center justify-center pt-[20px]  p-[10px] gap-[20px] service-col'   >
    <p className = 'font-[700] text-[25px] text-center'>Project management services</p>
     <img src='images/project.png' alt='project' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    With our In-house team of Project managers, we offer Project management services that help organizations to deliver projects successfully
    </p>
  </div>
  <div className='w-[300px] h-[250px] bg-[black] text-[white] rounded-[20px] flex flex-col items-center justify-center pt-[20px]  p-[10px] gap-[20px] service-col'   >
    <p className = 'font-[700] text-[25px] text-center'>ITIL services</p>
     <img src='images/library.png' alt='Respite care' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    Our ITIL services are IT services that are delivered in accordance with the Information Technology Infrastructure Library (ITIL) framework  through  a systematic approach
    </p>
  </div>
  <div className='w-[300px] h-[250px] bg-[#183D3D] text-[white] rounded-[20px] flex flex-col items-center justify-center pt-[20px]  p-[10px] gap-[20px] service-col'   >
    <p className = 'font-[700] text-[25px] text-center'>Application software development service</p>
     <img src='images/application.png' alt='application' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    Through our Application Software Development Service, we develop custom software applications
    </p>
  </div>
  <div className='w-[300px] h-[250px] bg-[black] text-[white] rounded-[20px] flex flex-col items-center justify-center pt-[20px]  p-[10px] gap-[20px] service-col'   >
    <p className = 'font-[700] text-[25px] text-center'>Software testing services</p>
     <img src='images/testing.png' alt='testing' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    Our Software testing services are a broad range of services that help organizations to ensure the quality of their software. 
    
    </p>
  </div>
  <div className='w-[300px] h-[250px] bg-[black] text-[white] rounded-[20px] flex flex-col items-center justify-center pt-[20px]  p-[10px] gap-[20px] service-col'   >
    <p className = 'font-[700] text-[25px] text-center'>ISO 20000</p>
     <img src='images/iso.png' alt='iso' className= 'w-[65px] h-[65px]'/> 
    <p className='text-[12px] font-[600] text-center'>
    Business Platform Limited provides organizations with the resources and expertise they need to implement and maintain an ISO 20000-compliant service management system (SMS)
    </p>
  </div>
  

  </div>
  <Link to={'/services'}>
  <button className=' hero-button p-2 outline-none bg-[black] text-[white] ml-[10px]  w-[10rem] rounded-[10px] mt-[15px]  '>
      Learn More
    </button>
  </Link>
</div>
 


    </div>
 
  </div>
  
  )
}
