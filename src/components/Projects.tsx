import React from 'react'
import Card from './Card'
import img from "../../public/Coins.png" 
const Projects = () => {
  return (
    <>
     
        <div className='py-5 px-3 w-full' >
            <span className='text-2xl' >
                Projects
            </span>
            <div className='flex flex-wrap w-full' >
                <Card name={"Resource-Lake"} desc={"NextJs,MongoDb,FireBase Google Auth,Chakra-UI"} imgurl={"https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"}/>
                <Card name={"Epistle"} desc={"NextJs,MongoDb,FireBase Google Auth,Chakra-UI"} imgurl={"https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"}/>
                <Card name={"Coins-App"} desc={"NextJs,MongoDb,FireBase Google Auth,Chakra-UI"} imgurl={"https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"}/>
                <Card name={"Real-Estate-App"} desc={"NextJs,MongoDb,FireBase Google Auth,Chakra-UI"} imgurl={"https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"}/>
            </div>
        </div>
    
    </>
  )
}

export default Projects
