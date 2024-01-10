import React from 'react'
import ResumeIcon from './icons/ResumeIcon'

const Resume = () => {
  return (
    <div className='flex flex-row justify-center m-auto p-2' >
        <a href="https://drive.google.com/file/d/1sQpz-To5SGcJaZK2obebvqKXMSVDAwDR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className='flex p-3 bg-green-500 rounded-md transition-transform transform duration-700 ease-in-out hover:scale-105 hover:bg-green-600'>
            View My Resume <ResumeIcon/>
        </button>
        </a>
    </div>
  )
}

export default Resume
