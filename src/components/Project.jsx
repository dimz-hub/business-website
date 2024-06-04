import React, {} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export default function Project() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
 
    
          
     
    

  return (
    <div className = 'skill' id = 'skills' >
        <div>
        <div className='skill-bx flex flex-col items-center justify-center mt-[45px]'>
      
              
          <h4 className='text-[50px] font-[600] mb-[35px]'>Projects</h4>
         

<Carousel

responsive={responsive}
      infinite={true}
      className='skill-slider'

    >
        
    <div  className = 'item'>
      <div className = 'flex flex-col justify-center items-center w-[20vw] h-[60vh] text-[white] rounded-[10px] bg-[black] ' >
    <img src='img/meter3.svg' alt='item' />
    <h5  className = 'text-[30px] font-[700] text-center'>Stores Requisition Application</h5>
    <p>Status: Ongoing </p>
      </div>
    </div>
    <div className = 'item'>
      <div className = 'flex flex-col justify-center text-[white] items-center w-[20vw] h-[60vh] rounded-[10px] bg-[#183D3D]'>

    <img src='img/meter1.svg' alt='item' />
    <h5  className = 'text-[30px] font-[700] text-center'>Various Application Software developed</h5>
    <p>Status: Completed </p>
    </div>
      </div>
    <div className = 'item'>
      <div className = 'flex flex-col justify-center items-center text-[white] w-[20vw] h-[60vh] rounded-[10px] bg-[black]'>

    <img src='img/meter2.svg' alt='item' />
    <h5  className = 'text-[30px] font-[700]'>Completed Projects</h5>
    <p>Status: Ongoing </p>
      </div>
    </div>
    <div className = 'item'>
      <div className = 'flex flex-col justify-center items-center text-[white] w-[20vw] h-[60vh] rounded-[10px] bg-[#183D3D]'>

    <img src='img/meter3.svg' alt='item' />
    <h5  className = 'text-[30px] font-[700] text-center'>ISO 20000 implementation</h5 > 
     <h5  className = 'text-[30px] font-[700]'>and audit for banks  </h5>
    <p>Status: Completed </p>
      </div>
    </div>
    <div className = 'item'>
      <div className = 'flex flex-col justify-center items-center text-[white] w-[20vw] h-[60vh] rounded-[10px] bg-[black]'>

    <img src='img/meter1.svg' alt='item' />
    <h5  className = 'text-[30px] font-[700] text-center'>  ITIL implementation and setup for companies</h5>
    <p>Status: Completed </p>
      </div>
    </div>
    <div className = 'item'>
      <div className = 'flex flex-col justify-center items-center text-[white]  w-[20vw] h-[60vh] rounded-[10px] bg-[#183D3D]'>

    <img src='img/meter3.svg' alt='item' />
    <h5  className = 'text-[30px] font-[700] text-center'>Software Testing for I.T. projects</h5>
    <p>Status: Completed </p>
      </div>
    </div>
    <div className = 'item'>
      <div className = 'flex flex-col justify-center items-center text-[white]  w-[20vw] h-[60vh] rounded-[10px] bg-[black]'>

    <img src='img/meter3.svg' alt='item' />
    <h5  className = 'text-[30px] font-[700]'> 2FA Project</h5>
    <p>Status: Ongoing </p>
      </div>
    </div>
    <div className = 'item'>
      <div  className = 'flex flex-col justify-center items-center text-[white]  w-[20vw] h-[60vh] rounded-[10px] bg-[#183D3D]'>

    <img src='img/meter3.svg' alt='item' />
    <h5  className = 'text-[30px] font-[700] text-center' >   Dozens of BMC Remedy implementation and support</h5>
    <p>Status: Completed </p>
      </div>
    </div>
    <div className = 'item'>
      <div className = 'flex flex-col justify-center items-center  w-[20vw] h-[60vh] rounded-[10px] bg-[black] text-[white]'>

    <img src='img/meter3.svg' alt='item' />
    <h5 className = 'text-[30px] font-[700] text-center'> Project Manager roles</h5>
    <p>Status: Completed </p>
      </div>
    </div>
 


 </Carousel>
 </div>
 
    
        
        </div>
    </div>
  
  )
}
