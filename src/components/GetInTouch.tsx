import React from 'react'
import EmailIcon from './icons/EmailIcon'

const GetInTouch = () => {
  return (
    <>
    
        <div className='px-3 text-2xl'>Get In Touch</div>

        <div className='flex flex-wrap m-3' >
            <span className='rounded-md bg-[#1C1B23] p-3 cursor-pointer m-2' >
                <a href="https://github.com/anishgupta1510" target='_blank' >
                    GitHub : anishgupta1510 
                </a>
            </span>

                <span className='rounded-md bg-[#1C1B23] p-3 cursor-pointer m-2' >
                    <a href="https://www.linkedin.com/in/anish-gupta-797a95203/" target='_blank'>
                        LinkedIn : Anish Gupta
                    </a>
                </span>
            
            <span className='rounded-md bg-[#1C1B23] p-3 cursor-pointer m-2 flex' >
                <EmailIcon/> Email : anishgupta700@gmail.com 
            </span>
        </div>
    
    </>
  )
}

export default GetInTouch
