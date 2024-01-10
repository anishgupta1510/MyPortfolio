import React from 'react'

const WhatIKnow = () => {
  return (
    <>
    
        <div className='px-3 text-2xl'>What I Know</div>
        <div className='flex flex-wrap p-3' >
            <div className='rounded-md bg-[#1C1B23] p-3 text-lg flex flex-col m-2' >
                <span className='font-semibold' >Frontend</span>
                <div className='flex flex-wrap text-sm mt-3' >
                        <span className='p-2 m-1 rounded-md bg-white text-black'  >
                            NextJs
                        </span>
                        <span className='p-2 m-1 rounded-md bg-blue-500 text-white'  >
                            ReactJs
                        </span>
                        <span className='p-2 m-1 rounded-md bg-blue-500 text-white'  >
                            React Native
                        </span>
                        <span className='p-2 m-1 rounded-md bg-red-600 text-white'  >
                            Angular
                        </span>
                        <span className='p-2 m-1 rounded-md bg-blue-500 text-white'  >
                            Tailwind
                        </span>
                        <span className='p-2 m-1 rounded-md bg-blue-500 text-white'  >
                            TypeSript
                        </span>
                        <span className='p-2 m-1 rounded-md bg-yellow-400 text-white'  >
                            JavaSript
                        </span>
                        <span className='p-2 m-1 rounded-md bg-orange-500 text-white'  >
                            HTML
                        </span>
                        <span className='p-2 m-1 rounded-md bg-blue-500 text-white'  >
                            CSS
                        </span>
                </div>
            </div>
            <div className='rounded-md bg-[#1C1B23] p-3 text-lg flex flex-col m-2' >
                <span className='font-semibold' >Backend</span>
                <div className='flex flex-wrap text-sm mt-3' >
                        <span className='p-2 m-1 rounded-md bg-green-500 text-white'  >
                            NodeJs
                        </span>
                        <span className='p-2 m-1 rounded-md bg-white text-black'  >
                            ExpressJS
                        </span>
                        <span className='p-2 m-1 rounded-md bg-green-500 text-white'  >
                            SpringBoot
                        </span>
                </div>
            </div>
            <div className='rounded-md bg-[#1C1B23] p-3 text-lg flex flex-col m-2'>
                <span className='font-semibold' >Database</span>
                <div className='flex flex-wrap text-sm mt-3'>
                        <span className='p-2 m-1 rounded-md bg-blue-500 text-white'> 
                                MySql
                        </span>
                        <span className='p-2 m-1 rounded-md bg-blue-500 text-white'> 
                                PostgreSql
                        </span>
                        <span className='p-2 m-1 rounded-md bg-green-500 text-white'> 
                                MongoDB
                        </span>
                        <span className='p-2 m-1 rounded-md bg-orange-500 text-white'> 
                                FireStore
                        </span>
                </div>
            </div>

        </div>
    </>
  )
}

export default WhatIKnow
