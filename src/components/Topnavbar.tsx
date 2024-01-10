import React from 'react'
import Profile from './icons/profile'
const Topnavbar = () => {
  return (
    <div>
        <div className='flex flex-row-reverse py-5 px-7' >
              <button className='p-3 bg-green-500 rounded-md hover:bg-green-600 flex justify-end' >
                  Contact Me
                <Profile/>
              </button>
        </div>
    </div>
  )
}

export default Topnavbar
